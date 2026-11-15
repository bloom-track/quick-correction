#!/bin/sh
# OCR the Class 12 Maths PDFs that have no text layer (scanned papers), so the
# tagger can read them. Text goes next to the pdftotext output in
# docs/content/pyq-xii-text/ (not in git). English OCR only; the Hindi half of a
# bilingual paper comes out as noise and the tagger ignores it.
#   sh scripts/pyq-xii-ocr.sh
set -eu
cd "$(dirname "$0")/../docs/content"
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT
find pyq-xii-text -name '*.txt' -size -2k | while IFS= read -r txt; do
  rel=${txt#pyq-xii-text/}
  pdf="pyq-xii/extracted/${rel%.txt}.pdf"
  [ -f "$pdf" ] || pdf="pyq-xii/extracted/${rel%.txt}.PDF"
  [ -f "$pdf" ] || { echo "no pdf for $txt"; continue; }
  echo "OCR $pdf"
  rm -f "$TMP"/p-*.png
  pdftoppm -r 200 -gray -png "$pdf" "$TMP/p"
  : > "$txt.ocr"
  for img in "$TMP"/p-*.png; do
    tesseract "$img" stdout -l eng --psm 4 2>/dev/null >> "$txt.ocr" || true
    printf '\n\f\n' >> "$txt.ocr"
  done
  mv "$txt.ocr" "$txt"
done
echo "OCR done"
