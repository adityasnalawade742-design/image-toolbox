# Image Toolbox document service: LibreOffice, Ghostscript, qpdf, ocrmypdf + Tesseract behind FastAPI.
# Builds on ARM64 (Oracle Ampere) and x86-64; runs on Google Cloud Run or a VM with Docker Compose.
FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    HOME=/tmp

RUN apt-get update && apt-get install -y --no-install-recommends \
      python3 python3-venv \
      libreoffice-writer-nogui libreoffice-calc-nogui libreoffice-impress-nogui \
      ghostscript qpdf ocrmypdf \
      tesseract-ocr tesseract-ocr-eng tesseract-ocr-deu tesseract-ocr-spa tesseract-ocr-fra tesseract-ocr-por \
      tesseract-ocr-ita tesseract-ocr-jpn tesseract-ocr-kor tesseract-ocr-ind tesseract-ocr-tur \
      fonts-liberation fonts-crosextra-carlito fonts-crosextra-caladea fonts-noto-core fonts-noto-cjk \
      ca-certificates \
    && rm -rf /var/lib/apt/lists/*

RUN python3 -m venv /opt/venv && /opt/venv/bin/pip install --no-cache-dir \
      "fastapi==0.115.*" "uvicorn==0.32.*" "python-multipart==0.0.*"

# Unprivileged user; the app only writes to /tmp
RUN useradd --system --uid 10001 --home /tmp app
COPY app /srv/app
USER app
WORKDIR /srv

# Cloud Run sets PORT (8080); Docker Compose on a VM uses 8000
ENV PORT=8000
EXPOSE 8000
CMD ["sh", "-c", "exec /opt/venv/bin/uvicorn app.main:app --host 0.0.0.0 --port \"$PORT\" --workers 1 --no-server-header"]
