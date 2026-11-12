"""PDF to Excel: the tables in a PDF as spreadsheet cells.

Run as: python pdf_to_xlsx.py <in.pdf> <out.xlsx> <each|one> <sheet word>
Exit codes: 0 done, 3 the PDF has no text (a scan: run OCR first).

Ruled tables come from PyMuPDF's table finder. Tables made only of aligned text (bank statements, reports with
no lines) are found here: lines of text that break into the same columns. A table that runs on at the top of the
next page is joined to the one before, without its repeated header. Numbers, percentages and dates become real
values with the look they had in the PDF.
"""
import re
import sys
from datetime import date

import pymupdf
from openpyxl import Workbook
from openpyxl.styles import Font
from openpyxl.utils import get_column_letter

norm = lambda s: re.sub(r"\s+", " ", (s or "")).strip()


def clean(rows, keep_cols=False):
    rows = [[norm(c) for c in r] for r in rows]
    rows = [r for r in rows if any(r)]
    if not rows or keep_cols:
        return rows
    keep = [i for i in range(len(rows[0])) if any(r[i] for r in rows)]
    return [[r[i] for i in keep] for r in rows]


def lines_of(words):
    """Words grouped into visual lines, each split into segments wherever a wide gap separates the words"""
    words = sorted(words, key=lambda w: ((w[1] + w[3]) / 2, w[0]))
    lines = []
    for w in words:
        yc = (w[1] + w[3]) / 2
        h = w[3] - w[1]
        if lines and abs(lines[-1]["yc"] - yc) < h * 0.5:
            lines[-1]["words"].append(w)
        else:
            lines.append({"yc": yc, "h": h, "words": [w]})
    for ln in lines:
        ln["words"].sort(key=lambda w: w[0])
        segs = []
        for w in ln["words"]:
            if segs and w[0] - segs[-1]["x1"] < ln["h"] * 0.6:
                segs[-1]["x1"] = w[2]
                segs[-1]["text"] += " " + w[4]
                segs[-1]["n"] += 1
            else:
                segs.append({"x0": w[0], "x1": w[2], "text": w[4], "n": 1})
        ln["segs"] = segs
        ln["y0"] = min(w[1] for w in ln["words"])
        ln["y1"] = max(w[3] for w in ln["words"])
    return lines


def borderless(words, carry=None, top=None):
    """Tables made of aligned text: runs of lines with two or more segments that share column gaps"""
    lines = lines_of(words)
    out = []
    i = 0
    while i < len(lines):
        if len(lines[i]["segs"]) < 2:
            i += 1
            continue
        run = [lines[i]]
        j = i + 1
        while j < len(lines):
            ln = lines[j]
            gap = ln["y0"] - run[-1]["y1"]
            if gap > ln["h"] * 1.5:
                break
            if len(ln["segs"]) >= 2:
                run.append(ln)
                j += 1
                continue
            # One segment: a wrapped cell if it sits tight under the line above, or a multi-segment line follows,
            # and it isn't at the table's left edge
            nxt = lines[j + 1] if j + 1 < len(lines) else None
            left = min(s["x0"] for r in run for s in r["segs"])
            tight = gap < ln["h"] * 0.4
            follows = nxt and len(nxt["segs"]) >= 2 and nxt["y0"] - ln["y1"] < ln["h"] * 1.5
            if ln["segs"][0]["x0"] > left + ln["h"] and (tight or follows):
                run.append(ln)
                j += 1
                continue
            break
        multi = [r for r in run if len(r["segs"]) >= 2]
        cont = carry is not None and not out and run[0]["y0"] < top
        if len(multi) >= 3 or (cont and multi):
            t = build(run, multi, carry if cont else None)
            if t:
                out.append(t)
        i = j
    return out


def build(run, multi, given=None):
    # Columns: x ranges covered by the segments of multi-segment lines, with the gaps between them
    spans = sorted((s["x0"], s["x1"]) for r in multi for s in r["segs"])
    cols = []
    for a, b in spans:
        if cols and a <= cols[-1][1] + 1:
            cols[-1][1] = max(cols[-1][1], b)
        else:
            cols.append([a, b])
    if given:
        cols = [list(c) for c in given]
    if len(cols) < 2:
        return None
    # Prose set in two columns is not a table: long runs of words in only two columns
    cells = [s for r in multi for s in r["segs"]]
    if len(cols) <= 2 and sum(s["n"] for s in cells) / len(cells) > 5:
        return None
    rows = []
    for ln in run:
        row = [""] * len(cols)
        for s in ln["segs"]:
            xc = (s["x0"] + s["x1"]) / 2
            k = min(range(len(cols)), key=lambda c: 0 if cols[c][0] <= xc <= cols[c][1] else min(abs(xc - cols[c][0]), abs(xc - cols[c][1])))
            row[k] = (row[k] + " " + s["text"]).strip()
        filled = sum(1 for c in row if c)
        # A wrapped line: the first column is empty and few cells are filled; it continues the row above
        if rows and not row[0] and filled <= len(cols) / 2:
            rows[-1] = [(p + " " + c).strip() if c else p for p, c in zip(rows[-1], row)]
        else:
            rows.append(row)
    # Neighbouring columns no row fills both (a left-aligned header over right-aligned numbers) are one column
    if not given:
        h = run[0]["h"]
        k = 0
        while k < len(cols) - 1:
            if cols[k + 1][0] - cols[k][1] < h * 1.5 and not any(r[k] and r[k + 1] for r in rows):
                cols[k] = [cols[k][0], cols[k + 1][1]]
                del cols[k + 1]
                rows = [r[:k] + [(r[k] + " " + r[k + 1]).strip()] + r[k + 2:] for r in rows]
            else:
                k += 1
    bbox = (cols[0][0], run[0]["y0"], cols[-1][1], run[-1]["y1"])
    return bbox, rows, [tuple(c) for c in cols]


def inside(w, box):
    xc = (w[0] + w[2]) / 2
    yc = (w[1] + w[3]) / 2
    return box[0] - 1 <= xc <= box[2] + 1 and box[1] - 1 <= yc <= box[3] + 1


def cell_text(table, words):
    """The table's cells filled from the page's words. PyMuPDF 2.x's own cell text loses spaces and moves decimal
    points ("26.21" becomes "2621 ."), so only its cell boundaries are used. A merged cell is None in every
    position but its first"""
    rows = []
    for row in table.rows:
        out = []
        for box in row.cells:
            if box is None:
                out.append("")
                continue
            inside_cell = [w for w in words if box[0] - 1 <= (w[0] + w[2]) / 2 <= box[2] + 1 and box[1] - 1 <= (w[1] + w[3]) / 2 <= box[3] + 1]
            out.append(" ".join(ln_text for ln_text in (" ".join(s["text"] for s in ln["segs"]) for ln in lines_of(inside_cell))))
        rows.append(out)
    return rows


def rules_of(page):
    """Ruling lines on the page: stroked paths, and the thin filled bars some programs draw borders with"""
    out = []
    for d in page.get_drawings():
        r = d["rect"]
        if (d.get("color") is not None and d.get("width")) or (d.get("fill") is not None and (r.width < 3 or r.height < 3)):
            out.append(r)
    return out


def page_tables(page, carry=None):
    found = []
    all_words = page.get_text("words")
    rules = rules_of(page)
    for t in page.find_tables(strategy="lines").tables:
        # PyMuPDF 2.x also guesses tables from text alone; those are left to the text-alignment finder below,
        # which handles wrapped cells and right-aligned numbers better. A table here needs ruling lines inside it
        box = pymupdf.Rect(t.bbox) + (-2, -2, 2, 2)
        if sum(1 for r in rules if box.intersects(r)) < 2:
            continue
        rows = clean(cell_text(t, all_words))
        # One column is usually a box or rules around text, not a grid
        if rows and len(rows[0]) >= 2:
            found.append((tuple(t.bbox), rows, None))
    words = [w for w in all_words if not any(inside(w, t[0]) for t in found)]
    for bbox, rows, cols in borderless(words, carry, page.rect.height * 0.2):
        # Rows continuing the previous page's table keep its columns, even ones empty here
        same = carry is not None and cols == [tuple(c) for c in carry]
        found.append((bbox, clean(rows, keep_cols=same), cols))
    found.sort(key=lambda t: (t[0][1], t[0][0]))
    return found


def all_tables(doc):
    out = []
    carry = None
    for page in doc:
        found = page_tables(page, carry)
        # The last text-aligned table on a page, if it reaches the bottom, may go on at the top of the next page
        carry = found[-1][2] if found and found[-1][2] and found[-1][0][3] > page.rect.height * 0.75 else None
        for bbox, rows, _ in found:
            if not rows:
                continue
            prev = out[-1] if out else None
            if prev and prev["page"] == page.number - 1 and prev["last"] and len(prev["rows"][0]) == len(rows[0]) and bbox[1] < page.rect.height * 0.2:
                if rows[0] == prev["rows"][0]:
                    rows = rows[1:]
                prev["rows"] += rows
                prev["page"] = page.number
                continue
            if out:
                out[-1]["last"] = False
            out.append({"page": page.number, "rows": rows, "last": True})
    return out


def text_lines(doc):
    """No tables at all: every line of text as a row, split into cells at wide gaps"""
    rows = []
    for page in doc:
        for ln in lines_of(page.get_text("words")):
            rows.append([s["text"] for s in ln["segs"]])
        rows.append([])
    width = max((len(r) for r in rows), default=1)
    return [r + [""] * (width - len(r)) for r in rows]


# ---- Values: numbers, percentages and dates keep their meaning and their look ----

CURRENCY = r"(?:US\$|R\$|\$|€|£|¥|₩|₹|₺|Rp|TL|USD|EUR|GBP|JPY|KRW|INR|IDR|TRY|BRL)"
NUMBER_SHAPE = re.compile(rf"^\(?[-−+]?\s*%?\s*{CURRENCY}?\s*[-−+]?[\d][\d.,'   ]*\s*{CURRENCY}?\s*%?\s*[-−]?\)?$")
GROUP_DOT = re.compile(r"\d{1,3}(?:,\d{3})+(?:\.\d+)?$")   # 1,234.56
GROUP_COMMA = re.compile(r"\d{1,3}(?:\.\d{3})+(?:,\d+)?$")  # 1.234,56


def decimal_mark(values):
    """'.' or ',' for a column, from the values that settle it (1,234.56 / 1.234,56 / 12,5)"""
    dot = comma = 0
    for v in values:
        core = re.sub(r"[^\d.,]", "", v)
        if re.search(r"\.\d+$", core) and ("," in core or not re.search(r"\.\d{3}$", core)):
            dot += 1
        elif re.search(r",\d+$", core) and ("." in core or not re.search(r",\d{3}$", core)):
            comma += 1
    return "," if comma > dot else "."


def as_number(s, mark):
    """(value, Excel number format) for a cell that is a number in the PDF, else None"""
    t = s.strip()
    if not t or not NUMBER_SHAPE.match(t) or not re.search(r"\d", t):
        return None
    neg = False
    if t.startswith("(") and t.endswith(")"):
        neg, t = True, t[1:-1].strip()
    # 12% or, as in Turkish, %12
    pct = t.endswith("%") or t.lstrip("-−+ ").startswith("%")
    if pct:
        t = t.replace("%", "").strip()
    cur = ""
    m = re.match(rf"^([-−+]?)\s*({CURRENCY})\s*(.*)$", t)
    if m:
        cur, t = m.group(2), m.group(1) + m.group(3)
    else:
        m = re.match(rf"^(.*?)\s*({CURRENCY})$", t)
        if m:
            t, cur = m.group(1), m.group(2)
    t = t.strip()
    if t.endswith(("-", "−")):
        neg, t = True, t[:-1].strip()
    if t.startswith(("-", "−")):
        neg, t = not neg, t[1:].strip()
    elif t.startswith("+"):
        t = t[1:].strip()
    t = re.sub(r"[   ']", "", t)
    if mark == ".":
        ok = re.fullmatch(r"\d+(?:\.\d+)?", t) or GROUP_DOT.fullmatch(t)
        digits = t.replace(",", "")
        grouped = "," in t
    else:
        ok = re.fullmatch(r"\d+(?:,\d+)?", t) or GROUP_COMMA.fullmatch(t)
        digits = t.replace(".", "").replace(",", ".")
        grouped = "." in t
    if not ok:
        return None
    whole = digits.split(".")[0]
    # Codes and account numbers stay text: a leading zero, or more digits than a spreadsheet keeps exactly
    if (len(whole) > 1 and whole.startswith("0")) or len(digits.replace(".", "")) > 15:
        return None
    value = float(digits) if "." in digits else int(digits)
    if neg:
        value = -value
    places = len(digits.split(".")[1]) if "." in digits else 0
    body = ("#,##0" if grouped else "0") + ("." + "0" * places if places else "")
    if pct:
        return value / 100, body + "%"
    if cur:
        sym = '"' + cur + '"'
        body = sym + body if s.strip().lstrip("(-−+ ").startswith(cur) else body + " " + sym
    fmt = f"{body};({body})" if neg and s.strip().startswith("(") else body
    return value, fmt


DATE_ISO = re.compile(r"^(\d{4})-(\d{1,2})-(\d{1,2})$")
DATE_DMY = re.compile(r"^(\d{1,2})([/.\-])(\d{1,2})\2(\d{4})$")


def date_order(values):
    """'dmy' or 'mdy' when the column settles it (a day above 12 somewhere), else None"""
    dmy = mdy = False
    for v in values:
        m = DATE_DMY.match(v.strip())
        if m:
            a, b = int(m.group(1)), int(m.group(3))
            dmy |= a > 12
            mdy |= b > 12
    if dmy and not mdy:
        return "dmy"
    if mdy and not dmy:
        return "mdy"
    return None


def as_date(s, order):
    t = s.strip()
    m = DATE_ISO.match(t)
    try:
        if m:
            return date(int(m.group(1)), int(m.group(2)), int(m.group(3))), "yyyy-mm-dd"
        m = DATE_DMY.match(t)
        if m and order:
            a, sep, b, y = int(m.group(1)), m.group(2), int(m.group(3)), int(m.group(4))
            d, mo = (a, b) if order == "dmy" else (b, a)
            fmt = f"dd{sep}mm{sep}yyyy" if order == "dmy" else f"mm{sep}dd{sep}yyyy"
            return date(y, mo, d), fmt
    except ValueError:
        return None
    return None


def write_table(ws, rows, top):
    """Rows from row `top`; returns the next free row. A text header over a body with numbers is set in bold"""
    width = max(len(r) for r in rows)
    rows = [r + [""] * (width - len(r)) for r in rows]
    body = rows[1:] if len(rows) > 1 else rows
    marks = [decimal_mark([r[c] for r in body if r[c]]) for c in range(width)]
    orders = [date_order([r[c] for r in body if r[c]]) for c in range(width)]
    typed_body = False
    for i, row in enumerate(rows):
        for c, s in enumerate(row):
            if not s:
                continue
            cell = ws.cell(top + i, c + 1)
            got = as_date(s, orders[c]) or as_number(s, marks[c])
            if got:
                cell.value, cell.number_format = got
                typed_body |= i > 0
            else:
                cell.value = s
    header = rows[0]
    if len(rows) > 1 and typed_body and all(as_number(s, ".") is None for s in header if s):
        for c in range(width):
            ws.cell(top, c + 1).font = Font(bold=True)
    return top + len(rows), len(rows) > 1 and typed_body


def fit_columns(ws):
    widths = {}
    for row in ws.iter_rows():
        for cell in row:
            if cell.value is not None:
                n = len(str(cell.value)) if not isinstance(cell.value, (int, float)) else len(f"{cell.value:,}") + 1
                widths[cell.column] = max(widths.get(cell.column, 0), n)
    for col, n in widths.items():
        ws.column_dimensions[get_column_letter(col)].width = min(max(n + 2, 8), 60)


def main():
    src, dst, mode, word = sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4]
    doc = pymupdf.open(src)
    if not any(page.get_text("words") for page in doc):
        sys.exit(3)
    tables = all_tables(doc)
    wb = Workbook()
    ws = wb.active
    if not tables:
        ws.title = word[:31]
        write_table(ws, text_lines(doc), 1)
        fit_columns(ws)
    elif mode == "one" or len(tables) == 1:
        ws.title = word[:31]
        row = 1
        for k, t in enumerate(tables):
            end, headed = write_table(ws, t["rows"], row)
            if k == 0 and headed and len(tables) == 1:
                ws.freeze_panes = "A2"
            row = end + 1
        fit_columns(ws)
    else:
        for k, t in enumerate(tables):
            if k:
                ws = wb.create_sheet()
            ws.title = f"{word} {k + 1}"[:31]
            _, headed = write_table(ws, t["rows"], 1)
            if headed:
                ws.freeze_panes = "A2"
            fit_columns(ws)
    wb.save(dst)


if __name__ == "__main__":
    main()
