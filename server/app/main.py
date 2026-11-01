"""
Image Toolbox document service.

Converts and repairs documents that browsers can't handle well: Office to PDF (LibreOffice), PDF to Word (pdf2docx),
PDF compression (Ghostscript), password protect / unlock and repair (qpdf), OCR and PDF/A (ocrmypdf).

Every job runs in its own temp directory that is deleted once the response has been sent.
Nothing about file contents is logged. Only the Cloudflare Worker, which knows ORIGIN_SECRET, may call /v1/*.
"""
import asyncio
import hmac
import json
import os
import shutil
import sys
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


async def refuse_if_password_needed(path: Path, job: Path):
    # Ghostscript and LibreOffice "succeed" on these and write an empty document
    code, _ = await run("qpdf", "--requires-password", str(path), cwd=job)
    if code == 0:
        raise JobError(422, "encrypted")


async def has_form_fields(path: Path, job: Path) -> bool:
    proc = await asyncio.create_subprocess_exec(
        "qpdf", "--json", "--json-key=acroform", str(path), cwd=str(job),
        stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.DEVNULL,
    )
    try:
        out, _ = await asyncio.wait_for(proc.communicate(), timeout=JOB_TIMEOUT)
    except asyncio.TimeoutError:
        proc.kill()
        await proc.wait()
        raise JobError(504, "timeout")
    try:
        return bool(json.loads(out)["acroform"]["fields"])
    except (ValueError, KeyError, TypeError):
        return False


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
# Image resolution and JPEG setting per Compress PDF preset, picked by measuring size against quality on photos and scans
# (a lower JPEG setting is better quality). Ghostscript's own screen preset leaves scans hard to read, and its printer
# preset often can't beat the original at all
COMPRESS_IMAGES = {"screen": (96, 0.76), "ebook": (150, 0.76), "printer": (220, 0.5)}
# How hard OCRmyPDF recompresses the JPEGs of a PDF with form fields, by Compress PDF preset
FORM_JPEG_QUALITY = {"screen": "40", "ebook": "60", "printer": "80"}
# PDF/A only keeps annotations marked for printing, and most links aren't
MARK_ANNOTS_PRINTABLE = """
import sys, pikepdf
strip_fields = len(sys.argv) > 3
with pikepdf.open(sys.argv[1]) as pdf:
    for page in pdf.pages:
        annots = page.get("/Annots", [])
        for annot in annots:
            flags = int(annot.get("/F", 0))
            if not flags & 35:  # Not the invisible or hidden ones, which must stay out of sight
                annot["/F"] = flags | 4
        if strip_fields and "/Annots" in page:
            page["/Annots"] = pikepdf.Array([a for a in annots if a.get("/Subtype") != "/Widget"])
    if strip_fields and "/AcroForm" in pdf.Root:
        del pdf.Root["/AcroForm"]
    pdf.save(sys.argv[2])
"""
# Ghostscript turns form fields into page content, so they are taken out first and put back on the PDF/A file by this. PDF/A
# wants every font embedded and no actions, so standard fonts become Liberation (same widths) and check marks become
# drawn lines. Exiting with an error means the form can't be made valid, and it is converted the plain way instead
PDFA_FIELDS = """
import sys
import pikepdf
from fontTools.ttLib import TTFont

source, pdfa, out = sys.argv[1:4]
FONT_DIR = "/usr/share/fonts/truetype/liberation/Liberation"
FAMILIES = (("HELVETICA", "Sans"), ("ARIAL", "Sans"), ("TIMES", "Serif"), ("COURIER", "Mono"))
src = pikepdf.open(source)
dst = pikepdf.open(pdfa)
made = {}


def embedded(base):
    name = base.upper()
    family = next((f for key, f in FAMILIES if key in name), None)
    if not family:
        return None
    bold, italic = "BOLD" in name, "ITALIC" in name or "OBLIQUE" in name
    style = {(False, False): "Regular", (True, False): "Bold", (False, True): "Italic", (True, True): "BoldItalic"}[(bold, italic)]
    file = f"{FONT_DIR}{family}-{style}.ttf"
    if file not in made:
        font = TTFont(file, lazy=True)
        scale = 1000 / font["head"].unitsPerEm
        cmap, metrics = font.getBestCmap(), font["hmtx"].metrics
        widths = []
        for code in range(32, 256):
            char = bytes([code]).decode("cp1252", "ignore")
            glyph = cmap.get(ord(char)) if char else None
            widths.append(round(metrics[glyph][0] * scale) if glyph else 0)
        data = open(file, "rb").read()
        head, hhea = font["head"], font["hhea"]
        program = dst.make_stream(data)
        program["/Length1"] = len(data)
        ps_name = pikepdf.Name(f"/Liberation{family}-{style}")
        descriptor = pikepdf.Dictionary(Type=pikepdf.Name.FontDescriptor, FontName=ps_name, Flags=32, ItalicAngle=-12 if italic else 0, StemV=80,
                                        FontBBox=[round(v * scale) for v in (head.xMin, head.yMin, head.xMax, head.yMax)],
                                        Ascent=round(hhea.ascent * scale), Descent=round(hhea.descent * scale), CapHeight=round(hhea.ascent * scale), FontFile2=dst.make_indirect(program))
        made[file] = dst.make_indirect(pikepdf.Dictionary(Type=pikepdf.Name.Font, Subtype=pikepdf.Name.TrueType, BaseFont=ps_name, FirstChar=32, LastChar=255, Widths=widths,
                                                          Encoding=pikepdf.Name.WinAnsiEncoding, FontDescriptor=dst.make_indirect(descriptor)))
    return made[file]


def is_embedded(font):
    descriptor = font.get("/FontDescriptor")
    return descriptor is not None and any(k in descriptor for k in ("/FontFile", "/FontFile2", "/FontFile3"))


def fix_stream(stream):
    fonts = stream.get("/Resources", {}).get("/Font", {})
    if b" Tf" in stream.read_bytes() and not len(fonts):
        sys.exit(3)
    for name in list(fonts.keys()):
        font = fonts[name]
        if is_embedded(font):
            continue
        base = str(font.get("/BaseFont", ""))
        if "DINGBATS" in base.upper():
            x0, y0, x1, y1 = (float(v) for v in stream.BBox)
            w, h = x1 - x0, y1 - y0
            stream.write(f"q 0 0 0 RG {max(w, h) * 0.12:.2f} w {x0 + w * 0.2:.2f} {y0 + h * 0.5:.2f} m {x0 + w * 0.42:.2f} {y0 + h * 0.25:.2f} l {x0 + w * 0.8:.2f} {y0 + h * 0.78:.2f} l S Q".encode())
            del stream["/Resources"]
            return
        better = embedded(base)
        if better is None:
            sys.exit(3)
        fonts[name] = better


def strip_actions(field):
    for key in ("/A", "/AA"):
        if key in field:
            del field[key]
    if "/Parent" in field:
        strip_actions(field.Parent)


widgets = []
for page in src.pages:
    for annot in page.get("/Annots", []):
        if annot.get("/Subtype") == "/Widget":
            if int(annot.get("/F", 0)) & 35 or annot.get("/FT") == "/Sig":
                sys.exit(3)
            strip_actions(annot)
            if "/P" in annot:
                del annot["/P"]
            widgets.append(annot)
form = src.Root.AcroForm
fields = dst.copy_foreign(src.make_indirect(form.Fields))
for src_page, dst_page in zip(src.pages, dst.pages):
    for annot in src_page.get("/Annots", []):
        if annot.get("/Subtype") != "/Widget":
            continue
        widget = dst.copy_foreign(annot)
        widget["/F"] = 4
        widget["/P"] = dst_page.obj
        ap = widget.get("/AP")
        normal = ap.get("/N") if ap is not None else None
        if normal is None:
            kind = widget.get("/FT", widget.get("/Parent", {}).get("/FT"))
            if kind == "/Btn" or len(str(widget.get("/V", ""))):
                sys.exit(3)
            rect = [float(v) for v in widget.Rect]
            blank = dst.make_stream(b"", Type=pikepdf.Name.XObject, Subtype=pikepdf.Name.Form, BBox=[0, 0, abs(rect[2] - rect[0]), abs(rect[3] - rect[1])])
            widget["/AP"] = pikepdf.Dictionary(N=dst.make_indirect(blank))
        elif isinstance(normal, pikepdf.Stream):
            fix_stream(normal)
            for key in ("/D", "/R"):
                if key in ap:
                    del ap[key]
        else:
            for state in normal.keys():
                fix_stream(normal[state])
            for key in ("/D", "/R"):
                if key in ap:
                    del ap[key]
        if "/Annots" not in dst_page:
            dst_page["/Annots"] = pikepdf.Array()
        dst_page["/Annots"].append(widget)
new_form = pikepdf.Dictionary(Fields=fields)
if "/DA" in form:
    new_form["/DA"] = form.DA
fonts = {}
for name, font in form.get("/DR", {}).get("/Font", {}).items():
    better = embedded(str(font.get("/BaseFont", "")))
    if better is not None:
        fonts[name] = better
if fonts:
    new_form["/DR"] = pikepdf.Dictionary(Font=pikepdf.Dictionary(fonts))
dst.Root.AcroForm = dst.make_indirect(new_form)
dst.save(out)
"""
# pdf2docx ignores the invisible text of a PDF that has been through OCR, so those pages are rewritten with that text showing
# (their picture is the scan itself, so it goes). Borderless table detection stays off for them: it finds tables in plain
# text. ignore_page_error off: by default pdf2docx leaves out any page it can't convert. It saves pictures as PNG, often
# many times the size of the JPEG in the PDF, so large ones go back to JPEG
PDF_TO_DOCX = """
import re
import sys
import zipfile
import pymupdf
from docx.enum.text import WD_BREAK
from docx.shared import Pt
from pdf2docx import Converter
from pdf2docx.common.docx import set_columns
from pdf2docx.layout.Section import Section


def make_section(self, document):
    set_columns(document.sections[-1], [c.bbox[2] - c.bbox[0] for c in self], self.space)
    for column in self:
        if column != self[0]:
            mark = document.add_paragraph()
            mark.paragraph_format.line_spacing = Pt(1)
            mark.paragraph_format.space_after = Pt(0)
            mark.add_run().add_break(WD_BREAK.COLUMN)
        column.make_docx(document)


# Every word processor understands a column break; "next column" sections aren't honoured everywhere
Section.make_docx = make_section

LATIN = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"
CJK = "/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc"
# OCR puts spaces between Japanese and Chinese characters, where the languages have none
CJK_SPACE = re.compile("(?<=[\\u3000-\\u30ff\\u3400-\\u9fff\\uff00-\\uffef]) +(?=[\\u3000-\\u30ff\\u3400-\\u9fff\\uff00-\\uffef])")
src, out = sys.argv[1:3]
FONTS = {"latin": pymupdf.Font(fontfile=LATIN), "cjk": pymupdf.Font(fontfile=CJK)}
doc = pymupdf.open(src)
scanned = [any(span["type"] == 3 for span in page.get_texttrace()) for page in doc]
if any(scanned):
    shown = pymupdf.open()
    for i, page in enumerate(doc):
        if not scanned[i]:
            shown.insert_pdf(doc, from_page=i, to_page=i)
            continue
        new = shown.new_page(width=page.rect.width, height=page.rect.height)
        new.insert_font(fontname="latin", fontfile=LATIN)
        new.insert_font(fontname="cjk", fontfile=CJK)
        lines = [line["spans"] for block in page.get_text("dict")["blocks"] for line in block.get("lines", []) if line["spans"]]
        sizes = sorted(spans[0]["size"] for spans in lines)
        typical = sizes[len(sizes) // 2] if sizes else 12
        # OCR can split a line in pieces, and pdf2docx drops one that overlaps another. Far-apart pieces are columns
        rows = []
        for spans in lines:
            piece = {"x": spans[0]["origin"][0], "end": spans[-1]["bbox"][2], "y": spans[0]["origin"][1], "size": spans[0]["size"], "text": "".join(span["text"] for span in spans)}
            row = None
            for r in rows:
                near = [q for q in r if piece["x"] - q["end"] < page.rect.width / 10 and q["x"] - piece["end"] < page.rect.width / 10]
                if abs(r[0]["y"] - piece["y"]) < typical / 4 and near:
                    row = r
                    break
            if row is None:
                rows.append([piece])
            else:
                row.append(piece)
        baselines = sorted({round(r[0]["y"]) for r in rows})
        # OCR's line boxes overlap, and pdf2docx would then weave neighboring lines together; its sizes can also be far off
        gaps = sorted(b - a for a, b in zip(baselines, baselines[1:]) if b - a > typical / 2)
        tallest = gaps[len(gaps) // 2] * 0.8 if gaps else 72
        for row in rows:
            row.sort(key=lambda q: q["x"])
            text = CJK_SPACE.sub("", " ".join(q["text"].strip() for q in row)).strip()
            if text:
                font = "cjk" if any(ord(c) > 0x2E7F for c in text) else "latin"
                size = min(max(row[0]["size"], typical * 0.8), max(tallest, 4))
                # pdf2docx leaves out text that runs off the page
                room = page.rect.width - row[0]["x"] - 2
                size = min(size, room / FONTS[font].text_length(text, fontsize=1))
                new.insert_text((row[0]["x"], row[0]["y"]), text, fontsize=size, fontname=font)
    src = out + ".pdf"
    shown.save(src)
converter = Converter(src)
converter.convert(out, ignore_page_error=False, parse_stream_table=not any(scanned))
converter.close()

if any(scanned):
    # Never hand back a scan with text missing: exiting here falls back to LibreOffice, which keeps it
    count = lambda text: len(re.sub(r"\\s", "", text))
    with zipfile.ZipFile(out) as z:
        written = "".join(re.findall(r"<w:t(?: [^>]*)?>([^<]*)", z.read("word/document.xml").decode("utf8")))
    if count(written) < 0.97 * count("".join(page.get_text() for page in pymupdf.open(src))):
        sys.exit(3)

small = out + ".small"
renamed = {}
with zipfile.ZipFile(out) as z, zipfile.ZipFile(small, "w", zipfile.ZIP_DEFLATED) as w:
    files = {n: z.read(n) for n in z.namelist()}
    for name in list(files):
        if re.fullmatch(r"word/media/[^/]+[.]png", name) and len(files[name]) > 200000:
            pix = pymupdf.Pixmap(files[name])
            if not pix.alpha:
                jpeg = pix.tobytes("jpeg", jpg_quality=88)
                if len(jpeg) < len(files[name]):
                    del files[name]
                    files[name[:-3] + "jpg"] = jpeg
                    renamed[name[5:]] = name[5:-3] + "jpg"
    if renamed:
        rels = files["word/_rels/document.xml.rels"].decode()
        for old, new_name in renamed.items():
            rels = rels.replace(old, new_name)
        files["word/_rels/document.xml.rels"] = rels.encode()
        types = files["[Content_Types].xml"].decode()
        if 'Extension="jpg"' not in types:
            types = types.replace("<Default ", '<Default Extension="jpg" ContentType="image/jpeg"/><Default ', 1)
        files["[Content_Types].xml"] = types.encode()
    for name, data in files.items():
        w.writestr(name, data)
__import__("os").replace(small, out)
"""
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
            await refuse_if_password_needed(src, job)
            named = src.rename(job / "input.pdf")
            # Real paragraphs and tables. LibreOffice, the fallback, puts everything in floating text boxes
            out = job / "pdf2docx.docx"
            code, _ = await run(sys.executable, "-c", PDF_TO_DOCX, str(named), str(out), cwd=job)
            if code == 0 and out.exists():
                return respond(out, job, DOCX, "converted.docx")
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
        await refuse_if_password_needed(src, job)
        out = job / "out.pdf"
        if await has_form_fields(src, job):
            # Ghostscript flattens form fields, so these only get their images recompressed (a zero OCR timeout skips recognition)
            code, _ = await run("ocrmypdf", "--skip-text", "--tesseract-timeout", "0", "--output-type", "pdf", "--optimize", "3",
                                "--jpeg-quality", FORM_JPEG_QUALITY[preset], "--jobs", "1", str(src), str(out), cwd=job)
        else:
            dpi, q = COMPRESS_IMAGES[preset]
            # AutoRotatePages off: the screen preset otherwise turns pages to suit the direction of their text
            code, _ = await run(
                "gs", "-sDEVICE=pdfwrite", "-dCompatibilityLevel=1.5", f"-dPDFSETTINGS=/{preset}", "-dAutoRotatePages=/None",
                "-dDetectDuplicateImages=true", "-dNOPAUSE", "-dQUIET", "-dBATCH", "-dSAFER",
                f"-sOutputFile={out}",
                f"-dColorImageResolution={dpi}", f"-dGrayImageResolution={dpi}", "-dColorImageDownsampleType=/Bicubic", "-dGrayImageDownsampleType=/Bicubic",
                "-c", f"<< /ColorACSImageDict << /QFactor {q} /Blend 1 /HSamples [2 1 1 2] /VSamples [2 1 1 2] >> /GrayACSImageDict << /QFactor {q} /Blend 1 /HSamples [1 1 1 1] /VSamples [1 1 1 1] >> >> setdistillerparams", "-f",
                str(src), cwd=job,
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
        await refuse_if_password_needed(src, job)
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
        langs = parse_langs(lang)
        # A plain PDF, not the default PDF/A: that conversion drops fillable form fields
        # Tesseract's automatic page layout takes the gaps in Korean lines for columns and loses words
        layout = ["--tesseract-pagesegmode", "6"] if "kor" in langs else []
        ocr_with = lambda mode: run("ocrmypdf", mode, *layout, "--output-type", "pdf", "--optimize", "1", "--jobs", "1", "-l", langs, str(src), str(out), cwd=job)
        # --redo-ocr reads the pictures on every page and keeps real text. Not --skip-text: that skips a whole scanned
        # page when anything on it, like a stamp or header, is already text
        code, err = await ocr_with("--redo-ocr")
        # It refuses some PDFs, such as fillable forms; --skip-text still reads their pages that have no text
        if code != 0 and "encrypt" not in err.lower():
            code, err = await ocr_with("--skip-text")
        if code != 0 or not out.exists():
            raise JobError(422, "encrypted" if "encrypt" in err.lower() else "ocr_failed")
        return respond(out, job, PDF, "searchable.pdf")


@app.post("/v1/pdfa")
async def pdfa(file: UploadFile):
    async with Job() as job:
        src = await save_upload(file, job)
        require(kind_of(src), {"pdf"})
        out = job / "out.pdf"
        async def to_pdfa(without_fields: bool) -> tuple[int, str]:
            marked = job / "marked.pdf"
            code, _ = await run("/usr/bin/python3", "-c", MARK_ANNOTS_PRINTABLE, str(src), str(marked), *(["strip"] if without_fields else []), cwd=job)
            # PDF/A-2b without running OCR (a zero OCR timeout skips recognition)
            return await run("ocrmypdf", "--skip-text", "--tesseract-timeout", "0", "--output-type", "pdfa-2",
                             "--jobs", "1", str(marked if code == 0 else src), str(out), cwd=job)

        if await has_form_fields(src, job):
            code, err = await to_pdfa(True)
            if code == 0:
                with_fields = job / "fields.pdf"
                restored, _ = await run(sys.executable, "-c", PDFA_FIELDS, str(src), str(out), str(with_fields), cwd=job)
                if restored == 0 and with_fields.exists():
                    return respond(with_fields, job, PDF, "pdfa.pdf")
        code, err = await to_pdfa(False)
        if code != 0 or not out.exists():
            raise JobError(422, "encrypted" if "encrypt" in err.lower() else "pdfa_failed")
        return respond(out, job, PDF, "pdfa.pdf")
