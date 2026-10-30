"""
Image Toolbox document service.

Converts and repairs documents that browsers can't handle well: Office <-> PDF (LibreOffice),
PDF compression (Ghostscript), password protect / unlock and repair (qpdf), OCR and PDF/A (ocrmypdf).

Every job runs in its own temp directory that is deleted once the response has been sent.
Nothing about file contents is logged. Only the Cloudflare Worker, which knows ORIGIN_SECRET, may call /v1/*.
"""
import asyncio
import hmac
import os
import shutil
import tempfile
import uuid
import zipfile
from pathlib import Path

from fastapi import FastAPI, Form, HTTPException, Request, UploadFile
from fastapi.responses import FileResponse, JSONResponse
from starlette.background import BackgroundTask

SECRET = os.environ.get("ORIGIN_SECRET", "")
# Cloud Run accepts request bodies up to 32 MiB, so uploads stay under that
MAX_BYTES = int(os.environ.get("MAX_UPLOAD_MB", "30")) * 1024 * 1024
# Below Cloud Run's request timeout (300 s) and the Worker's (290 s), with room for a cold start
JOB_TIMEOUT = int(os.environ.get("JOB_TIMEOUT_S", "240"))
# One LibreOffice/Ghostscript job per vCPU; matches --concurrency on Cloud Run
CONCURRENCY = int(os.environ.get("CONCURRENCY", "2"))
MAX_WAITING = int(os.environ.get("MAX_WAITING", "4"))
JOBS_DIR = Path(os.environ.get("JOBS_DIR", "/tmp/jobs"))
OCR_LANGS = {"eng", "deu", "spa", "fra", "por", "ita", "jpn", "kor", "ind", "tur"}

app = FastAPI(docs_url=None, redoc_url=None, openapi_url=None)
slots = asyncio.Semaphore(CONCURRENCY)
waiting = 0


class JobError(Exception):
    def __init__(self, status: int, code: str):
        self.status = status
        self.code = code


@app.exception_handler(JobError)
async def job_error(_: Request, exc: JobError):
    return JSONResponse({"error": exc.code}, status_code=exc.status)


@app.middleware("http")
async def require_secret(request: Request, call_next):
    if request.url.path.startswith("/v1/"):
        given = request.headers.get("x-origin-secret", "")
        if not SECRET or not hmac.compare_digest(given.encode(), SECRET.encode()):
            return JSONResponse({"error": "forbidden"}, status_code=403)
        length = request.headers.get("content-length")
        if length and length.isdigit() and int(length) > MAX_BYTES + 1024 * 1024:
            return JSONResponse({"error": "too_large"}, status_code=413)
    return await call_next(request)


@app.get("/health")
async def health():
    return {"ok": True, "busy": CONCURRENCY - slots._value, "waiting": waiting, "slots": CONCURRENCY}


# ---------- helpers ----------

def kind_of(path: Path) -> str:
    """Identify a file by its content, not its name."""
    with open(path, "rb") as f:
        head = f.read(2048)
    if b"%PDF-" in head[:1024]:
        return "pdf"
    if head.startswith(b"\xd0\xcf\x11\xe0\xa1\xb1\x1a\xe1"):
        return "ole"  # legacy .doc / .xls / .ppt
    if head.startswith(b"{\\rtf"):
        return "rtf"
    if head.startswith(b"PK\x03\x04"):
        try:
            with zipfile.ZipFile(path) as z:
                names = set(z.namelist())
                if "mimetype" in names:
                    mime = z.read("mimetype").decode("ascii", "ignore")
                    if mime.startswith("application/vnd.oasis.opendocument.text"):
                        return "odt"
                    if mime.startswith("application/vnd.oasis.opendocument.spreadsheet"):
                        return "ods"
                    if mime.startswith("application/vnd.oasis.opendocument.presentation"):
                        return "odp"
                if "[Content_Types].xml" in names:
                    if any(n.startswith("word/") for n in names):
                        return "docx"
                    if any(n.startswith("xl/") for n in names):
                        return "xlsx"
                    if any(n.startswith("ppt/") for n in names):
                        return "pptx"
        except zipfile.BadZipFile:
            return "unknown"
        return "unknown"
    # Plain text / CSV: decodable and no NUL bytes
    if b"\x00" not in head:
        try:
            head.decode("utf-8")
            return "text"
        except UnicodeDecodeError:
            pass
    return "unknown"


async def save_upload(upload: UploadFile, job: Path) -> Path:
    dest = job / "input"
    size = 0
    with open(dest, "wb") as out:
        while chunk := await upload.read(1024 * 1024):
            size += len(chunk)
            if size > MAX_BYTES:
                raise JobError(413, "too_large")
            out.write(chunk)
    if size == 0:
        raise JobError(400, "empty")
    return dest


async def run(*args: str, cwd: Path, ok_codes=(0,)) -> tuple[int, str]:
    proc = await asyncio.create_subprocess_exec(
        *args, cwd=str(cwd), stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.PIPE,
        env={**os.environ, "HOME": str(cwd)},
    )
    try:
        _, err = await asyncio.wait_for(proc.communicate(), timeout=JOB_TIMEOUT)
    except asyncio.TimeoutError:
        proc.kill()
        await proc.wait()
        raise JobError(504, "timeout")
    text = err.decode("utf-8", "ignore")
    if proc.returncode not in ok_codes:
        return proc.returncode, text
    return 0, text


class Job:
    """A temp dir plus a concurrency slot; queue overflow answers 503 straight away."""

    async def __aenter__(self) -> Path:
        global waiting
        if waiting >= MAX_WAITING:
            raise JobError(503, "busy")
        waiting += 1
        try:
            await slots.acquire()
        finally:
            waiting -= 1
        JOBS_DIR.mkdir(parents=True, exist_ok=True)
        self.dir = Path(tempfile.mkdtemp(prefix="job-", dir=JOBS_DIR))
        return self.dir

    async def __aexit__(self, exc_type, exc, tb):
        slots.release()
        if exc_type is not None:
            shutil.rmtree(self.dir, ignore_errors=True)
        return False


def respond(path: Path, job: Path, media: str, filename: str, **headers: str) -> FileResponse:
    # The job directory is removed after the file has been streamed
    return FileResponse(
        path, media_type=media, filename=filename, headers=headers,
        background=BackgroundTask(shutil.rmtree, job, ignore_errors=True),
    )


PDF = "application/pdf"
DOCX = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"


def require(kind: str, allowed: set[str]):
    if kind not in allowed:
        raise JobError(415, "unsupported_type")


# ---------- endpoints ----------

@app.post("/v1/convert")
async def convert(file: UploadFile, to: str = "pdf"):
    if to not in ("pdf", "docx"):
        raise JobError(400, "bad_target")
    async with Job() as job:
        src = await save_upload(file, job)
        kind = kind_of(src)
        if to == "pdf":
            require(kind, {"docx", "xlsx", "pptx", "odt", "ods", "odp", "ole", "rtf", "text"})
            ext = {"text": "txt", "ole": "doc"}.get(kind, kind)
            # A .csv must keep its extension for Calc to open it as a sheet
            if kind == "text" and (file.filename or "").lower().endswith(".csv"):
                ext = "csv"
            named = src.rename(job / f"input.{ext}")
            args = ["soffice", f"-env:UserInstallation=file://{job}/profile", "--headless", "--norestore",
                    "--convert-to", "pdf", "--outdir", str(job / "out"), str(named)]
            out_name, media = "input.pdf", PDF
        else:
            require(kind, {"pdf"})
            named = src.rename(job / "input.pdf")
            args = ["soffice", f"-env:UserInstallation=file://{job}/profile", "--headless", "--norestore",
                    "--infilter=writer_pdf_import", "--convert-to", "docx:MS Word 2007 XML",
                    "--outdir", str(job / "out"), str(named)]
            out_name, media = "input.docx", DOCX
        code, _ = await run(*args, cwd=job)
        out = job / "out" / out_name
        if code != 0 or not out.exists():
            raise JobError(422, "convert_failed")
        return respond(out, job, media, f"converted.{to}")


@app.post("/v1/compress")
async def compress(file: UploadFile, preset: str = "ebook"):
    if preset not in ("screen", "ebook", "printer"):
        raise JobError(400, "bad_preset")
    async with Job() as job:
        src = await save_upload(file, job)
        require(kind_of(src), {"pdf"})
        out = job / "out.pdf"
        code, _ = await run(
            "gs", "-sDEVICE=pdfwrite", "-dCompatibilityLevel=1.5", f"-dPDFSETTINGS=/{preset}",
            "-dDetectDuplicateImages=true", "-dNOPAUSE", "-dQUIET", "-dBATCH", "-dSAFER",
            f"-sOutputFile={out}", str(src), cwd=job,
        )
        if code != 0 or not out.exists():
            raise JobError(422, "compress_failed")
        before, after = src.stat().st_size, out.stat().st_size
        # Never hand back a bigger file
        best = out if after < before else src
        return respond(best, job, PDF, "compressed.pdf", **{"X-Size-Before": str(before), "X-Size-After": str(best.stat().st_size)})


def check_password(password: str):
    if not 1 <= len(password) <= 128:
        raise JobError(400, "bad_password")


@app.post("/v1/protect")
async def protect(file: UploadFile, password: str = Form(...)):
    check_password(password)
    async with Job() as job:
        src = await save_upload(file, job)
        require(kind_of(src), {"pdf"})
        out = job / "out.pdf"
        # Same password to open and to change permissions; AES-256
        code, err = await run("qpdf", "--encrypt", password, password, "256", "--", str(src), str(out), cwd=job, ok_codes=(0, 3))
        if code != 0 or not out.exists():
            raise JobError(422, "already_encrypted" if "password" in err.lower() else "protect_failed")
        return respond(out, job, PDF, "protected.pdf")


@app.post("/v1/unlock")
async def unlock(file: UploadFile, password: str = Form("")):
    if len(password) > 128:
        raise JobError(400, "bad_password")
    async with Job() as job:
        src = await save_upload(file, job)
        require(kind_of(src), {"pdf"})
        out = job / "out.pdf"
        code, err = await run("qpdf", f"--password={password}", "--decrypt", str(src), str(out), cwd=job, ok_codes=(0, 3))
        if code != 0 or not out.exists():
            raise JobError(422, "wrong_password" if "invalid password" in err.lower() else "unlock_failed")
        return respond(out, job, PDF, "unlocked.pdf")


@app.post("/v1/repair")
async def repair(file: UploadFile):
    async with Job() as job:
        src = await save_upload(file, job)
        require(kind_of(src), {"pdf"})
        out = job / "out.pdf"
        # Rewriting rebuilds the cross-reference table; exit 3 means "repaired with warnings"
        code, _ = await run("qpdf", "--object-streams=generate", str(src), str(out), cwd=job, ok_codes=(0, 3))
        if code != 0 or not out.exists():
            raise JobError(422, "repair_failed")
        return respond(out, job, PDF, "repaired.pdf")


def parse_langs(lang: str) -> str:
    langs = [l for l in lang.split("+") if l in OCR_LANGS]
    return "+".join(langs or ["eng"])


@app.post("/v1/ocr")
async def ocr(file: UploadFile, lang: str = "eng"):
    async with Job() as job:
        src = await save_upload(file, job)
        require(kind_of(src), {"pdf"})
        out = job / "out.pdf"
        # --skip-text leaves pages that already have text alone
        code, err = await run("ocrmypdf", "--skip-text", "--optimize", "1", "--jobs", "1", "-l", parse_langs(lang),
                              str(src), str(out), cwd=job)
        if code != 0 or not out.exists():
            raise JobError(422, "encrypted" if "encrypt" in err.lower() else "ocr_failed")
        return respond(out, job, PDF, "searchable.pdf")


@app.post("/v1/pdfa")
async def pdfa(file: UploadFile):
    async with Job() as job:
        src = await save_upload(file, job)
        require(kind_of(src), {"pdf"})
        out = job / "out.pdf"
        # PDF/A-2b without running OCR (a zero OCR timeout skips recognition)
        code, err = await run("ocrmypdf", "--skip-text", "--tesseract-timeout", "0", "--output-type", "pdfa-2",
                              "--jobs", "1", str(src), str(out), cwd=job)
        if code != 0 or not out.exists():
            raise JobError(422, "encrypted" if "encrypt" in err.lower() else "pdfa_failed")
        return respond(out, job, PDF, "pdfa.pdf")
