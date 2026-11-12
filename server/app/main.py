"""
Image Toolbox document service.

Converts and repairs documents that browsers can't handle well: Office to PDF (LibreOffice), PDF to Word (pdf2docx),
PDF compression and grayscale (Ghostscript), password protect / unlock and repair (qpdf), OCR and PDF/A (ocrmypdf).

Every job runs in its own temp directory that is deleted once the response has been sent.
Nothing about file contents is logged. Only the Cloudflare Worker, which knows ORIGIN_SECRET, may call /v1/*.
"""
import asyncio
import hmac
import json
import os
import secrets
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
OCR_LANGS = {"eng", "deu", "spa", "fra", "por", "ita", "jpn", "kor", "ind", "tur",
             "rus", "ukr", "hin", "nld", "pol", "vie", "chi_sim", "chi_tra", "tha"}
# Languages written without spaces between words, whose OCR text layer is rewritten by OCR_JOIN
NO_SPACE_LANGS = {"jpn", "chi_sim", "chi_tra", "tha"}

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


async def run(*args: str, cwd: Path, ok_codes=(0,), env: dict | None = None) -> tuple[int, str]:
    proc = await asyncio.create_subprocess_exec(
        *args, cwd=str(cwd), stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.PIPE,
        env={**os.environ, "HOME": str(cwd), **(env or {})},
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


def jpeg_qfactor(quality: int) -> float:
    """Ghostscript's JPEG QFactor for a 1-100 quality, with libjpeg's scaling (QFactor 1.0 is quality 50). The presets
    above are quality 62 (0.76) and 75 (0.5) on this scale."""
    return round(50 / quality if quality < 50 else (200 - 2 * quality) / 100, 3)
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
def find_figures(page):
    # Pictures on a scanned page: dense regions of ink or colour that recognised words don't explain. Text, table
    # borders, underlines and specks are not pictures
    import cv2
    import numpy as np
    dpi = 100
    pix = page.get_pixmap(dpi=dpi, alpha=False)
    img = np.frombuffer(pix.samples, dtype=np.uint8).reshape(pix.h, pix.w, 3).astype(np.int16)
    H, W = pix.h, pix.w
    s = dpi / 72
    ink = ((img.mean(2) < 200) | (img.max(2) - img.min(2) > 40)).astype(np.uint8)
    words = np.zeros((H, W), np.uint8)
    for x0, y0, x1, y1, *_ in page.get_text("words"):
        words[max(0, int(y0 * s) - 2):int(y1 * s) + 3, max(0, int(x0 * s) - 2):int(x1 * s) + 3] = 1
    rest = ink * (1 - words)
    k = max(3, int(0.012 * max(W, H)))
    joined = cv2.morphologyEx(rest, cv2.MORPH_CLOSE, np.ones((k, k), np.uint8))
    n, _, stats, _ = cv2.connectedComponentsWithStats(joined, 8)
    found = []
    for i in range(1, n):
        x, y, w, h, _ = stats[i]
        density = rest[y:y + h, x:x + w].mean()
        big = w * h >= 0.012 * W * H and w >= 0.06 * W and h >= 0.035 * H
        small = w * h >= 0.003 * W * H and min(w, h) >= 0.03 * min(W, H)
        if (big and density >= 0.18 or small and density >= 0.25) and words[y:y + h, x:x + w].mean() < 0.25:
            found.append([x, y, x + w, y + h])
    # Trim edges that hold almost nothing but recognised text, such as a caption the joining step reached
    for box in found:
        x0, y0, x1, y1 = box
        while y1 - y0 > k and rest[y0, x0:x1].mean() < 0.03 and rest[y0:y0 + k // 2, x0:x1].mean() < 0.03:
            y0 += 1
        while y1 - y0 > k and rest[y1 - 1, x0:x1].mean() < 0.03 and rest[y1 - k // 2:y1, x0:x1].mean() < 0.03:
            y1 -= 1
        while x1 - x0 > k and rest[y0:y1, x0].mean() < 0.03 and rest[y0:y1, x0:x0 + k // 2].mean() < 0.03:
            x0 += 1
        while x1 - x0 > k and rest[y0:y1, x1 - 1].mean() < 0.03 and rest[y0:y1, x1 - k // 2:x1].mean() < 0.03:
            x1 -= 1
        box[:] = [x0, y0, x1, y1]
    merged = True
    while merged:
        merged = False
        for a in range(len(found)):
            for b in range(a + 1, len(found)):
                A, B = found[a], found[b]
                if A[0] <= B[2] + k and B[0] <= A[2] + k and A[1] <= B[3] + k and B[1] <= A[3] + k:
                    found[a] = [min(A[0], B[0]), min(A[1], B[1]), max(A[2], B[2]), max(A[3], B[3])]
                    del found[b]
                    merged = True
                    break
            if merged:
                break
    return [pymupdf.Rect(max(0, x0 - 4) / s, max(0, y0 - 4) / s, min(W, x1 + 4) / s, min(H, y1 + 4) / s) for x0, y0, x1, y1 in found]

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
        # Pictures on the scan (photos, charts, logos) go into the document as images; text OCR read inside them
        # (chart labels, letters in a logo) stays in the picture rather than being repeated as text
        figures = find_figures(page)
        # pdf2docx reads a picture and the text right beside it as one line and reorders that text, so a picture with
        # text next to it (a logo beside a letterhead) is left out, as before; pictures on their own lines or in their
        # own column are kept
        def beside(rect):
            for x0, y0, x1, y1, *_ in page.get_text("words"):
                word = pymupdf.Rect(x0, y0, x1, y1)
                if rect.contains(word):
                    continue
                overlap = min(rect.y1, y1) - max(rect.y0, y0)
                gap = max(rect.x0 - x1, x0 - rect.x1)
                if overlap > 0.5 * (y1 - y0) and gap < 0.1 * page.rect.width:
                    return True
            return False
        figures = [rect for rect in figures if not beside(rect)]
        lines = [line["spans"] for block in page.get_text("dict")["blocks"] for line in block.get("lines", []) if line["spans"]]
        sizes = sorted(spans[0]["size"] for spans in lines)
        typical = sizes[len(sizes) // 2] if sizes else 12
        # OCR can split a line in pieces, and pdf2docx drops one that overlaps another. Far-apart pieces are columns
        rows = []
        inside = lambda spans: any(rect.contains(pymupdf.Rect(spans[0]["bbox"][0], min(sp["bbox"][1] for sp in spans), spans[-1]["bbox"][2], max(sp["bbox"][3] for sp in spans))) for rect in figures)
        for spans in lines:
            if inside(spans):
                continue
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
        for rect in figures:
            new.insert_image(rect, stream=page.get_pixmap(dpi=200, clip=rect, alpha=False).tobytes("jpeg", jpg_quality=90))
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


OCR_JOIN = r"""
import re
import statistics
import sys
from pathlib import Path

import pymupdf

pymupdf.TOOLS.mupdf_display_errors(False)
path, temp = sys.argv[1], Path(sys.argv[2])
# Tesseract writes each word as its own run of text followed by a space glyph, stretched (Tz) to an estimate of the
# word's width. Chinese, Japanese and Thai don't put spaces between words, so a reader gets "年 度 预算" and can't find
# "年度预算"; Thai is even split into single letters, with each vowel sign and tone mark on a baseline of its own. Words
# that belong together are merged into one run that spans from the first to where the next word starts


def nospace(ch):
    c = ord(ch)
    return (0x0E00 <= c <= 0x0E7F or 0x3000 <= c <= 0x30FF or 0x3400 <= c <= 0x4DBF or 0x4E00 <= c <= 0x9FFF
            or 0xF900 <= c <= 0xFAFF or 0xFF00 <= c <= 0xFFEF or 0x31F0 <= c <= 0x31FF or 0xD800 <= c <= 0xDFFF)


def thai(ch):
    return 0x0E00 <= ord(ch) <= 0x0E7F


# Thai vowel signs and tone marks sit above or below a letter: one on its own is never a word, and they take no width
MARK_CODES = [0x0E31, *range(0x0E34, 0x0E3B), *range(0x0E47, 0x0E4F)]
MARKS = set(chr(c) for c in MARK_CODES)
# Font widths (PDF /W) giving those marks no advance, so readers don't see a gap after each one
MARK_WIDTHS = "[3633 [0] 3636 [0 0 0 0 0 0 0] 3655 [0 0 0 0 0 0 0 0]]"


def tsv_words(page_no):
    # Word boxes from Tesseract's own table for this page: (left, right, line height, line), in reading order
    for table in temp.rglob("*_ocr_tess.tsv"):
        number = re.match(r"\d+", table.name)
        if not number or int(number.group()) != page_no:
            continue
        rows = [l.split("\t") for l in table.read_text(encoding="utf-8", errors="ignore").splitlines()[1:]]
        lines, words = {}, []
        for r in rows:
            if len(r) < 12:
                continue
            key = tuple(r[1:5])
            if r[0] == "4":
                lines[key] = int(r[9])
            elif r[0] == "5" and r[11].strip():
                words.append((int(r[6]), int(r[6]) + int(r[8]), lines.get(key, int(r[9])), key))
        return words
    return None


def glyphs(text):
    return len(text.encode("utf-16-be")) // 2


TOKEN = re.compile(rb"/\S+ ([\d.]+) Tf|([-\d.]+) Tz \[ <([0-9A-Fa-f]*)> \] TJ|([-\d.]+) ([-\d.]+) Td")
doc = pymupdf.open(path)
changed = 0
for page in doc:
    boxes_all = None
    for xref, name, *_ in page.get_xobjects():
        if not name.startswith("OCR-"):
            continue
        stream = doc.xref_stream(xref)
        if b"Tz [ <" not in stream:
            continue
        words, size = [], 0.0
        for m in TOKEN.finditer(stream):
            if m.group(1):
                size = float(m.group(1))
            elif m.group(3) is not None:
                text = bytes.fromhex(m.group(3).decode()).decode("utf-16-be", "replace")
                words.append({"m": m, "text": text, "size": size, "tz": float(m.group(2)), "td": None})
            elif words and words[-1]["td"] is None:
                words[-1]["td"] = m
        if boxes_all is None:
            boxes_all = tsv_words(page.number + 1)
        boxes = boxes_all if boxes_all is not None and len(boxes_all) == len(words) else None
        # The usual gap between two Thai letters on this page, to tell it from a space between phrases
        letter_gaps = [boxes[k + 1][0] - boxes[k][1] for k in range(len(words) - 1)
                       if boxes and boxes[k][3] == boxes[k + 1][3] and boxes[k + 1][0] > boxes[k][1]
                       and thai(words[k]["text"].rstrip(" ")[-1:] or "a") and thai(words[k + 1]["text"][:1] or "a")]
        usual = statistics.median(letter_gaps) if letter_gaps else 0
        thai_joined = False

        def joins(i, rise):
            # Whether word i and the next one are parts of one word; `rise` is how far the next word's baseline sits
            # from the first word of the group
            w, nxt = words[i], words[i + 1]
            a, b = w["text"].rstrip(" "), nxt["text"].rstrip(" ")
            if not a or not b or not (nospace(a[-1]) and nospace(b[0])) or w["td"] is None:
                return False
            dx = float(w["td"].group(4))
            # Thai vowel signs and tone marks are boxed on their own, above or below the letter, so their baseline moves
            limit = 1.5 if b[0] in MARKS else 0.6
            if dx <= 0 or abs(rise) > limit * max(w["size"], 1) or nxt["size"] != w["size"]:
                return False  # The next word starts a new line
            between = stream[w["m"].end():nxt["m"].start()]
            if between.replace(w["td"].group(0), b"").strip():
                return False  # Something other than a move sits between them
            if thai(a[-1]) or thai(b[0]):
                # Thai does use spaces, between phrases: join where the letters are no further apart than usual. Measured
                # on four fonts at 20-44 px, clean and scanned: no stray spaces, and 5 of 48 phrase spaces lost
                if b[0] in MARKS or a[-1] in MARKS:
                    return True
                if not boxes:
                    return False
                (l0, r0, h0, _), (l1, _, h1, _) = boxes[i], boxes[i + 1]
                return l1 - r0 <= max(0.2 * max(h0, h1), 2.5 * usual)
            return True

        edits, i = [], 0
        while i < len(words) - 1:
            j, rise = i, 0.0
            while j < len(words) - 1 and words[j]["td"] is not None:
                rise += float(words[j]["td"].group(5))
                if not joins(j, rise):
                    break
                j += 1
            if j == i:
                i += 1
                continue
            group = words[i:j + 1]
            first, last = group[0], group[-1]
            text = "".join(w["text"].rstrip(" ") for w in group) + (" " if last["text"].endswith(" ") else "")
            moves = [(float(w["td"].group(4)), float(w["td"].group(5))) for w in group[:-1]]
            # From the first word to the start of the last, then the last word's own width
            span = sum(dx for dx, _ in moves) + glyphs(last["text"]) * 0.5 * last["size"] * last["tz"] / 100
            has_thai = any(thai(c) for c in text)
            # Glyphs that take up width: all but Thai marks, which get none below
            n = glyphs(text) - (sum(c in MARKS for c in text) if has_thai else 0)
            if first["size"] <= 0 or span <= 0 or n <= 0:
                i = j + 1
                continue
            thai_joined = thai_joined or has_thai
            tz = span * 100 / (n * 0.5 * first["size"])
            run = b"%.3f Tz [ <%s> ] TJ" % (tz, text.encode("utf-16-be").hex().upper().encode())
            end = last["m"].end()
            if last["td"] is not None:
                # The move after the group is now made from the first word, so it adds up the moves taken out
                dx = sum(dx for dx, _ in moves) + float(last["td"].group(4))
                dy = sum(dy for _, dy in moves) + float(last["td"].group(5))
                run += b" %.3f %.3f Td" % (dx, dy)
                end = last["td"].end()
            edits.append((first["m"].start(), end, run))
            i = j + 1
        if edits:
            out = bytearray(stream)
            for s, e, rep in reversed(edits):
                out[s:e] = rep
            doc.update_stream(xref, bytes(out))
            changed += len(edits)
        if thai_joined:
            # The text layer's font is Tesseract's GlyphLessFont, a CID font whose codes are Unicode code points
            kind, font = doc.xref_get_key(xref, "Resources/Font/f-0-0")
            if kind == "xref":
                kind, desc = doc.xref_get_key(int(font.split()[0]), "DescendantFonts")
                found = re.match(r"\[\s*(\d+) 0 R", desc) if kind == "array" else None
                if found:
                    doc.xref_set_key(int(found.group(1)), "W", MARK_WIDTHS)
if changed:
    # Added to the end of the file, so everything else in it stays exactly as it was
    doc.save(path, incremental=True, encryption=pymupdf.PDF_ENCRYPT_KEEP)
print(changed)
"""

MUPDF_RESCUE = """
import sys
import pymupdf
pymupdf.TOOLS.mupdf_display_errors(False)
src, out = sys.argv[1], sys.argv[2]


def readable(path):
    try:
        with pymupdf.open(path) as doc:
            if doc.page_count == 0:
                return False
            for page in doc:
                page.get_text()
        return True
    except Exception:
        return False


try:
    doc = pymupdf.open(src, filetype="pdf")
except Exception:
    sys.exit(2)
if doc.needs_pass or doc.page_count == 0:
    sys.exit(3)
try:
    doc.save(out, garbage=3, deflate=True)
except Exception:
    pass
if not readable(out):
    # The rebuilt file can inherit a broken page tree; copy the pages that load into a fresh document instead.
    # Reopen the original: saving can leave the open copy in a state where no page loads
    doc = pymupdf.open(src, filetype="pdf")
    fresh = pymupdf.open()
    kept = {}
    for number in range(doc.page_count):
        try:
            doc[number].get_text()
            fresh.insert_pdf(doc, from_page=number, to_page=number)
            kept[number + 1] = fresh.page_count
        except Exception:
            continue
    if fresh.page_count == 0:
        sys.exit(4)
    try:
        fresh.set_toc([[level, title, kept[page]] for level, title, page, *_ in doc.get_toc(simple=False) if page in kept])
    except Exception:
        pass
    fresh.save(out, garbage=3, deflate=True)
    if not readable(out):
        sys.exit(5)
"""

# LibreOffice PDF export filter for each input type, and options that keep pictures exact at full resolution
PDF_EXPORT_FILTER = {"docx": "writer_pdf_Export", "odt": "writer_pdf_Export", "doc": "writer_pdf_Export",
                     "rtf": "writer_pdf_Export", "txt": "writer_pdf_Export", "xlsx": "calc_pdf_Export",
                     "ods": "calc_pdf_Export", "csv": "calc_pdf_Export", "pptx": "impress_pdf_Export",
                     "odp": "impress_pdf_Export", "xls": "calc_pdf_Export", "ppt": "impress_pdf_Export"}
LOSSLESS = {"UseLosslessCompression": {"type": "boolean", "value": "true"},
            "ReduceImageResolution": {"type": "boolean", "value": "false"}}
# Calc only: each sheet becomes one page as big as its content, instead of being cut across many pages
ONE_PAGE_PER_SHEET = {"SinglePageSheets": {"type": "boolean", "value": "true"}}


# ---------- endpoints ----------

@app.post("/v1/convert")
async def convert(file: UploadFile, to: str = "pdf", fit: str = ""):
    if to not in ("pdf", "docx") or fit not in ("", "sheet"):
        raise JobError(400, "bad_target")
    async with Job() as job:
        src = await save_upload(file, job)
        kind = kind_of(src)
        if to == "pdf":
            require(kind, {"docx", "xlsx", "pptx", "odt", "ods", "odp", "ole", "rtf", "text"})
            ext = {"text": "txt", "ole": "doc"}.get(kind, kind)
            # Old .doc, .xls and .ppt files look alike inside; the name says which app made them
            if kind == "ole" and (file.filename or "").lower().rsplit(".", 1)[-1] in ("xls", "ppt"):
                ext = (file.filename or "").lower().rsplit(".", 1)[-1]
            # A .csv must keep its extension for Calc to open it as a sheet
            if kind == "text" and (file.filename or "").lower().endswith(".csv"):
                ext = "csv"
            named = src.rename(job / f"input.{ext}")
            # LibreOffice's default export recompresses pictures as JPEG and lowers them to 300 DPI. Lossless keeps
            # every picture exact, and a camera JPEG is copied in as it is, at the cost of larger files
            export = PDF_EXPORT_FILTER.get(ext)
            options = {**LOSSLESS, **(ONE_PAGE_PER_SHEET if fit == "sheet" and export == "calc_pdf_Export" else {})}
            target = f"pdf:{export}:{json.dumps(options, separators=(',', ':'))}" if export else "pdf"
            soffice = lambda to: run("soffice", f"-env:UserInstallation=file://{job}/profile", "--headless", "--norestore",
                                     "--convert-to", to, "--outdir", str(job / "out"), str(named), cwd=job)
            code, err = await soffice(target)
            out = job / "out" / "input.pdf"
            # An old .xls or .ppt arrives named .doc and opens in another app, which the Writer filter can't export
            if (code != 0 or not out.exists()) and target != "pdf":
                code, err = await soffice("pdf")
            if code != 0 or not out.exists():
                raise JobError(422, "convert_failed")
            return respond(out, job, PDF, "converted.pdf")
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
async def compress(file: UploadFile, preset: str = "ebook", dpi: int = 150, quality: int = 62, gray: str = "n"):
    """A preset, or custom: image resolution 50-600 dpi and JPEG quality 10-95. gray=y also turns every colour grey."""
    if preset not in ("screen", "ebook", "printer", "custom"):
        raise JobError(400, "bad_preset")
    if preset == "custom" and not (50 <= dpi <= 600 and 10 <= quality <= 95):
        raise JobError(400, "bad_preset")
    if gray not in ("y", "n"):
        raise JobError(400, "bad_preset")
    async with Job() as job:
        src = await save_upload(file, job)
        require(kind_of(src), {"pdf"})
        await refuse_if_password_needed(src, job)
        out = job / "out.pdf"
        extra_headers = {}
        if await has_form_fields(src, job):
            # Ghostscript flattens form fields, so these only get their images recompressed (a zero OCR timeout skips
            # recognition). Resolution and grey can't be applied this way; the response says the fields were kept
            jpeg = str(quality) if preset == "custom" else FORM_JPEG_QUALITY[preset]
            code, _ = await run("ocrmypdf", "--skip-text", "--tesseract-timeout", "0", "--output-type", "pdf", "--optimize", "3",
                                "--jpeg-quality", jpeg, "--jobs", "1", str(src), str(out), cwd=job)
            if preset == "custom" or gray == "y":
                extra_headers["X-Kept-Forms"] = "1"
        else:
            dpi, q = (dpi, jpeg_qfactor(quality)) if preset == "custom" else COMPRESS_IMAGES[preset]
            # Custom settings start from the ebook preset; only the images are set differently
            base = "ebook" if preset == "custom" else preset
            grey = ["-sColorConversionStrategy=Gray", "-dProcessColorModel=/DeviceGray", "-dOverrideICC=true"] if gray == "y" else []
            # AutoRotatePages off: the screen preset otherwise turns pages to suit the direction of their text
            code, _ = await run(
                "gs", "-sDEVICE=pdfwrite", "-dCompatibilityLevel=1.5", f"-dPDFSETTINGS=/{base}", "-dAutoRotatePages=/None", *grey,
                "-dDetectDuplicateImages=true", "-dNOPAUSE", "-dQUIET", "-dBATCH", "-dSAFER",
                f"-sOutputFile={out}",
                f"-dColorImageResolution={dpi}", f"-dGrayImageResolution={dpi}", "-dColorImageDownsampleType=/Bicubic", "-dGrayImageDownsampleType=/Bicubic",
                "-c", f"<< /ColorACSImageDict << /QFactor {q} /Blend 1 /HSamples [2 1 1 2] /VSamples [2 1 1 2] >> /GrayACSImageDict << /QFactor {q} /Blend 1 /HSamples [1 1 1 1] /VSamples [1 1 1 1] >> >> setdistillerparams", "-f",
                str(src), cwd=job,
            )
        if code != 0 or not out.exists():
            raise JobError(422, "compress_failed")
        before, after = src.stat().st_size, out.stat().st_size
        # Never hand back a bigger file, unless it was turned grey: then the grey one is what was asked for
        greyed = gray == "y" and "X-Kept-Forms" not in extra_headers
        best = out if after < before or greyed else src
        return respond(best, job, PDF, "compressed.pdf", **{"X-Size-Before": str(before), "X-Size-After": str(best.stat().st_size), **extra_headers})


@app.post("/v1/grayscale")
async def grayscale(file: UploadFile):
    """Every colour in the PDF turned to grey by Ghostscript: text and vector shapes stay as they are (selectable,
    sharp), images are converted without downsampling and re-encoded at high quality."""
    async with Job() as job:
        src = await save_upload(file, job)
        require(kind_of(src), {"pdf"})
        await refuse_if_password_needed(src, job)
        out = job / "out.pdf"
        code, _ = await run(
            "gs", "-sDEVICE=pdfwrite", "-dCompatibilityLevel=1.5", "-sColorConversionStrategy=Gray", "-dProcessColorModel=/DeviceGray",
            "-dOverrideICC=true", "-dAutoRotatePages=/None", "-dDetectDuplicateImages=true",
            "-dDownsampleColorImages=false", "-dDownsampleGrayImages=false", "-dDownsampleMonoImages=false",
            "-dNOPAUSE", "-dQUIET", "-dBATCH", "-dSAFER", f"-sOutputFile={out}",
            # Photos stay JPEG at high quality; line art and screenshots are chosen as lossless by Ghostscript's auto filter
            "-c", "<< /GrayACSImageDict << /QFactor 0.15 /Blend 1 /HSamples [1 1 1 1] /VSamples [1 1 1 1] >> >> setdistillerparams", "-f",
            str(src), cwd=job,
        )
        if code != 0 or not out.exists():
            raise JobError(422, "grayscale_failed")
        return respond(out, job, PDF, "grayscale.pdf")


def check_password(password: str):
    if not 1 <= len(password) <= 128:
        raise JobError(400, "bad_password")


@app.post("/v1/protect")
async def protect(file: UploadFile, password: str = Form(...), owner: str = Form(""), allow_print: str = Form("full", alias="print"),
                  copy: str = Form("y"), edit: str = Form("y")):
    check_password(password)
    if owner:
        check_password(owner)
    if allow_print not in ("full", "low", "none") or copy not in ("y", "n") or edit not in ("y", "n"):
        raise JobError(400, "bad_options")
    limited = allow_print != "full" or copy == "n" or edit == "n"
    # The open password also unlocks everything when it is the owner password, so limits need a different one. Without
    # one given, a random one nobody knows keeps the limits; Unlock PDF with the open password still removes them
    if limited and owner == password:
        raise JobError(400, "owner_same")
    owner = owner or (secrets.token_urlsafe(24) if limited else password)
    async with Job() as job:
        src = await save_upload(file, job)
        require(kind_of(src), {"pdf"})
        out = job / "out.pdf"
        # AES-256. Viewers enforce the limits; screen readers keep access to the text
        rights = [f"--print={allow_print}", f"--extract={copy}", f"--modify={'all' if edit == 'y' else 'none'}"]
        code, err = await run("qpdf", "--encrypt", password, owner, "256", *rights, "--", str(src), str(out), cwd=job, ok_codes=(0, 3))
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
        with open(src, "rb") as f:
            head = f.read(65536)
            f.seek(max(0, src.stat().st_size - 2048))
            tail = f.read()
        # A PDF that lost its first line still has its objects; anything else isn't a PDF
        if kind_of(src) != "pdf" and not (b" obj" in head and b"endobj" in head):
            raise JobError(415, "unsupported_type")
        # A PDF ends with %%EOF; without it the file was cut off, usually by a failed download or copy
        cut_off = b"%%EOF" not in tail
        out = job / "out.pdf"
        rescued = False
        if kind_of(src) == "pdf":
            await refuse_if_password_needed(src, job)
            # Rewriting rebuilds the cross-reference table; exit 3 means "repaired with warnings"
            code, _ = await run("qpdf", "--object-streams=generate", str(src), str(out), cwd=job, ok_codes=(0, 3))
        else:
            code = 1
        if code != 0 or not out.exists():
            # MuPDF reads past more damage, such as a cut-off end or a missing header, and rebuilds what it finds
            out.unlink(missing_ok=True)
            code, _ = await run(sys.executable, "-c", MUPDF_RESCUE, str(src), str(out), cwd=job)
            rescued = code == 0 and out.exists()
            if not rescued:
                raise JobError(422, "incomplete" if cut_off else "repair_failed")
        # Pages from a cut-off file may be blank or missing content, so the page says the result is partial
        return respond(out, job, PDF, "repaired.pdf", **({"X-Repair": "partial"} if rescued and cut_off else {}))


def parse_langs(lang: str) -> str:
    # Up to two languages for pages that mix them; each one more makes recognition slower
    langs = list(dict.fromkeys(l for l in lang.split("+") if l in OCR_LANGS))[:2]
    return "+".join(langs or ["eng"])


# Straightens tilted scanned pages before OCR. Prints one JSON line: the tilt found on each scanned page and whether
# it was corrected. Exit code 0 always when the PDF could be read; out.pdf is written only when at least one page was
# turned. A scanned page is one picture covering (nearly) the whole page. Its tilt is the angle at which the rows of
# dark pixels line up best (text lines give sharp peaks), searched up to 15 degrees either way. Pages are only turned
# when the lines are clear (a photo or drawing has no such peak) and the tilt is at least 0.3 degrees.
STRAIGHTEN = r'''
import io, json, sys
import numpy as np
import pymupdf
from PIL import Image, JpegImagePlugin

MAX_TILT = 15.0
MIN_TILT = 0.3
# How much sharper the best angle must be than a typical one before a page counts as lined text
MIN_SHARPNESS = 1.6


def otsu(a):
    hist = np.bincount(a.ravel(), minlength=256).astype(float)
    total = a.size
    sum_all = np.dot(np.arange(256), hist)
    w0 = np.cumsum(hist)
    s0 = np.cumsum(np.arange(256) * hist)
    w1 = total - w0
    with np.errstate(divide='ignore', invalid='ignore'):
        between = (s0 / w0 - (sum_all - s0) / w1) ** 2 * w0 * w1
    return int(np.nanargmax(between))


def tilt_of(gray):
    """(angle in degrees to turn the picture counter-clockwise to straighten it, sharpness); None when no lines"""
    scale = 1200 / max(gray.size)
    if scale < 1:
        gray = gray.resize((max(1, int(gray.width * scale)), max(1, int(gray.height * scale))), Image.BILINEAR)
    a = np.asarray(gray, dtype=np.uint8)
    ink = a < otsu(a)
    share = ink.mean()
    if share < 0.002 or share > 0.4:
        return None
    ys, xs = np.nonzero(ink)
    if len(ys) > 80000:
        pick = np.random.default_rng(0).choice(len(ys), 80000, replace=False)
        ys, xs = ys[pick], xs[pick]
    ys = ys.astype(float) - a.shape[0] / 2
    xs = xs.astype(float) - a.shape[1] / 2

    def score(deg):
        t = np.radians(deg)
        rows = np.round(ys * np.cos(t) - xs * np.sin(t)).astype(int)
        h = np.bincount(rows - rows.min())
        return float(np.dot(h, h))

    coarse = np.arange(-MAX_TILT, MAX_TILT + 0.001, 0.5)
    sc = np.array([score(d) for d in coarse])
    best = coarse[int(np.argmax(sc))]
    fine = np.arange(best - 0.5, best + 0.5001, 0.05)
    sf = np.array([score(d) for d in fine])
    angle = float(fine[int(np.argmax(sf))])
    sharpness = float(sf.max() / np.median(sc))
    return angle, sharpness


def page_picture(doc, page):
    """The xref of the one picture covering the page, or None"""
    imgs = page.get_images(full=True)
    if len(imgs) != 1:
        return None
    xref = imgs[0][0]
    rects = page.get_image_rects(xref)
    if len(rects) != 1:
        return None
    area = abs(rects[0] & page.rect)
    # Pictures with transparency or used as a stencil are left alone
    if doc.xref_get_key(xref, 'SMask')[0] != 'null' or doc.xref_get_key(xref, 'ImageMask')[1] == 'true':
        return None
    return xref if area >= 0.9 * abs(page.rect) else None


def put_back(doc, xref, turned, info):
    """Write the straightened pixels into the same picture object: the page keeps one picture, in its place"""
    for key in ('DecodeParms', 'Decode', 'JBIG2Globals'):
        doc.xref_set_key(xref, key, 'null')
    if info.get('bpc') == 1:
        # Black-and-white scans stay black and white (1 bit per pixel, 1 = white as in DeviceGray)
        bw = turned.convert('L').point(lambda v: 255 if v >= 128 else 0).convert('1')
        doc.update_stream(xref, bw.tobytes(), compress=True)
        doc.xref_set_key(xref, 'Filter', '/FlateDecode')
        doc.xref_set_key(xref, 'ColorSpace', '/DeviceGray')
        doc.xref_set_key(xref, 'BitsPerComponent', '1')
    elif info.get('ext') == 'jpeg':
        # The scan's own JPEG tables and colour sampling: the same quality and about the same size
        out = io.BytesIO()
        try:
            orig = Image.open(io.BytesIO(info['image']))
            turned.save(out, 'JPEG', qtables=orig.quantization, subsampling=JpegImagePlugin.get_sampling(orig), optimize=True)
        except Exception:
            out = io.BytesIO()
            turned.save(out, 'JPEG', quality=85, optimize=True)
        doc.update_stream(xref, out.getvalue(), compress=False)
        doc.xref_set_key(xref, 'Filter', '/DCTDecode')
    else:
        doc.update_stream(xref, turned.tobytes(), compress=True)
        doc.xref_set_key(xref, 'Filter', '/FlateDecode')
        doc.xref_set_key(xref, 'ColorSpace', '/DeviceGray' if turned.mode == 'L' else '/DeviceRGB')
        doc.xref_set_key(xref, 'BitsPerComponent', '8')


def main(src, dst):
    doc = pymupdf.open(src)
    report = []
    changed = False
    for page in doc:
        xref = page_picture(doc, page)
        if not xref:
            continue
        info = doc.extract_image(xref)
        pix = pymupdf.Pixmap(doc, xref)
        if pix.alpha or pix.n - pix.alpha not in (1, 3):
            continue
        mode = 'L' if pix.n == 1 else 'RGB'
        im = Image.frombytes(mode, (pix.width, pix.height), pix.samples)
        found = tilt_of(im.convert('L'))
        if not found:
            report.append({'page': page.number + 1, 'tilt': None})
            continue
        angle, sharp = found
        apply = sharp >= MIN_SHARPNESS and MIN_TILT <= abs(angle) <= MAX_TILT - 0.5
        report.append({'page': page.number + 1, 'tilt': round(angle, 2), 'sharpness': round(sharp, 2), 'turned': apply})
        if not apply:
            continue
        white = 255 if mode == 'L' else (255, 255, 255)
        turned = im.rotate(angle, resample=Image.BICUBIC, expand=False, fillcolor=white)
        put_back(doc, xref, turned, info)
        changed = True
    if changed:
        doc.save(dst, garbage=3, deflate=True)
    print(json.dumps({'changed': changed, 'pages': report}))


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
'''


@app.post("/v1/ocr")
async def ocr(file: UploadFile, lang: str = "eng", straighten: str = "n"):
    async with Job() as job:
        src = await save_upload(file, job)
        require(kind_of(src), {"pdf"})
        # A PDF that opens without a password but forbids printing or copying is still encrypted, and ocrmypdf refuses
        # any encryption. Those restrictions come off first (qpdf exits 3: encrypted, no password needed); a PDF that
        # needs a password to open is refused as before (exit 0)
        code, _ = await run("qpdf", "--requires-password", str(src), cwd=job)
        if code == 0:
            raise JobError(422, "encrypted")
        if code == 3:
            plain = job / "plain.pdf"
            code, _ = await run("qpdf", "--decrypt", str(src), str(plain), cwd=job, ok_codes=(0, 3))
            if code == 0 and plain.exists():
                src = plain
        # Tilted scans (a phone photo of a page is often 5-10 degrees off) are read badly; their pages are turned
        # straight first, up to 15 degrees. Only pages that are one scanned picture, and only when the text lines are clear
        if straighten == "y":
            straight = job / "straight.pdf"
            code, _ = await run(sys.executable, "-c", STRAIGHTEN, str(src), str(straight), cwd=job)
            if code == 0 and straight.exists():
                src = straight
        out = job / "out.pdf"
        langs = parse_langs(lang)
        # A plain PDF, not the default PDF/A: that conversion drops fillable form fields
        # Tesseract's automatic page layout takes the gaps in Korean lines for columns and loses words
        layout = ["--tesseract-pagesegmode", "6"] if "kor" in langs else []
        # Tesseract also writes a table of its word confidences, read below to judge each page
        tsv = job / "tsv.cfg"
        tsv.write_text("tessedit_create_tsv 1\n")
        # --rotate-pages turns sideways and upside-down scans upright before reading them
        def ocr_with(mode: str, target: Path, work: str, *extra: str):
            temp = job / work
            temp.mkdir(exist_ok=True)
            return run("ocrmypdf", mode, "--rotate-pages", "--keep-temporary-files", "--tesseract-config", str(tsv), *layout, *extra,
                       "--output-type", "pdf", "--optimize", "1", "--jobs", "1", "-l", langs, str(src), str(target),
                       cwd=job, env={"TMPDIR": str(temp)})
        # --redo-ocr reads the pictures on every page and keeps real text. Not --skip-text: that skips a whole scanned
        # page when anything on it, like a stamp or header, is already text
        mode = "--redo-ocr"
        code, err = await ocr_with(mode, out, "first")
        # It refuses some PDFs, such as fillable forms; --skip-text still reads their pages that have no text
        if code != 0 and "encrypt" not in err.lower():
            mode = "--skip-text"
            shutil.rmtree(job / "first", ignore_errors=True)
            code, err = await ocr_with(mode, out, "first")
        if code != 0 or not out.exists():
            raise JobError(422, "encrypted" if "encrypt" in err.lower() else "ocr_failed")
        # Photos with uneven light come back empty or as garbage. If Tesseract is unsure of any page, read the file
        # again with Sauvola thresholding, made for uneven light, and keep that only if it is sure of more text
        first = ocr_confidence(job / "first")
        if any(sure < 40 or sure < 0.6 * total for total, sure in first):
            second = job / "second.pdf"
            code, _ = await ocr_with(mode, second, "second", "--tesseract-thresholding", "sauvola")
            if code == 0 and second.exists() and sum(s for _, s in ocr_confidence(job / "second")) > sum(s for _, s in first):
                out = second
        if NO_SPACE_LANGS & set(langs.split("+")):
            # Words of Chinese, Japanese and Thai are joined up, so they can be searched and copied as written. On a copy,
            # kept only if the rewrite finishes
            joined = job / "joined.pdf"
            shutil.copy(out, joined)
            code, _ = await run(sys.executable, "-c", OCR_JOIN, str(joined), str(job / ("second" if out.name == "second.pdf" else "first")), cwd=job)
            if code == 0:
                out = joined
        return respond(out, job, PDF, "searchable.pdf")


def ocr_confidence(temp: Path) -> list[tuple[int, int]]:
    """Per page OCR'd: word characters read, and how many of those Tesseract is fairly sure of (confidence 60+)."""
    pages = []
    for table in sorted(temp.rglob("*_ocr_tess.tsv")):
        total = sure = 0
        for line in table.read_text(encoding="utf-8", errors="ignore").splitlines()[1:]:
            cols = line.split("\t")
            if len(cols) < 12 or float(cols[10]) < 0:
                continue
            chars = sum(ch.isalnum() for ch in cols[11])
            total += chars
            sure += chars if float(cols[10]) >= 60 else 0
        pages.append((total, sure))
    return pages


@app.post("/v1/pdfa")
async def pdfa(file: UploadFile, level: str = "2"):
    if level not in ("1", "2", "3"):
        raise JobError(400, "bad_options")
    async with Job() as job:
        src = await save_upload(file, job)
        require(kind_of(src), {"pdf"})
        out = job / "out.pdf"
        async def to_pdfa(without_fields: bool) -> tuple[int, str]:
            marked = job / "marked.pdf"
            code, _ = await run("/usr/bin/python3", "-c", MARK_ANNOTS_PRINTABLE, str(src), str(marked), *(["strip"] if without_fields else []), cwd=job)
            # PDF/A-1b, 2b or 3b without running OCR (a zero OCR timeout skips recognition)
            return await run("ocrmypdf", "--skip-text", "--tesseract-timeout", "0", "--output-type", f"pdfa-{level}",
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
