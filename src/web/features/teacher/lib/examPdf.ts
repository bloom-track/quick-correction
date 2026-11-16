/**
 * Builds the question paper as a real A4 PDF in the browser.
 *
 * The paper is laid out by <ExamPaper> (offscreen, at the printed width), drawn
 * to a canvas with the browser's own renderer, then cut into pages at question boundaries so no question is
 * sliced through the middle unless it is longer than a page. Each page is
 * placed in a jsPDF document with its own "Page x of y" footer.
 *
 * The pages are images, so the text in the PDF cannot be selected or searched.
 */

const PAGE_W = 210, PAGE_H = 297;
const MARGIN = { x: 14, top: 15, bottom: 17 };
const CONTENT_W = PAGE_W - MARGIN.x * 2;          // 182 mm
const CONTENT_H = PAGE_H - MARGIN.top - MARGIN.bottom; // 265 mm

/** Page spans in CSS px: [from, to) down the element, cut between blocks. */
function pageSpans(el: HTMLElement, pxPerMm: number): [number, number][] {
  const H = CONTENT_H * pxPerMm - 4;
  const root = el.getBoundingClientRect();
  const nodes = Array.from(el.querySelectorAll<HTMLElement>('.exam-head, .exam-instr, .exam-section-head, .exam-qs > li, .exam-end'));
  const tops = nodes.map((n) => n.getBoundingClientRect().top - root.top);
  const glue = nodes.map((n) => n.classList.contains('exam-section-head'));
  const total = root.height;
  const spans: [number, number][] = [];
  let start = 0;
  for (let i = 0; i < nodes.length; i++) {
    let j = i;
    while (glue[j] && j + 1 < nodes.length) j++;     // a heading stays with the question after it
    const blockEnd = tops[j + 1] ?? total;
    if (tops[i] > start + 1 && blockEnd - start > H) { spans.push([start, tops[i]]); start = tops[i]; }
    while (blockEnd - start > H) { spans.push([start, start + H]); start += H; }
    i = j;
  }
  if (total - start > 1) spans.push([start, total]);
  return spans;
}

/* ── drawing a slice of the paper with the browser's own renderer ─────────────
 * The paper is cloned into an SVG <foreignObject>, with the page's own CSS and
 * the KaTeX fonts embedded, and drawn to a canvas. Layout, rules, fractions and
 * matrices therefore come out exactly as the browser lays them out. */

const NS_XHTML = 'http://www.w3.org/1999/xhtml';
let cssCache: Promise<string> | null = null;

const wanted = (sel: string) => sel.includes('.exam-') || sel.includes('.katex');

function collectRules(rules: CSSRuleList, out: string[]) {
  for (const r of Array.from(rules)) {
    if (r instanceof CSSStyleRule) { if (wanted(r.selectorText)) out.push(r.cssText); }
    else if (r instanceof CSSMediaRule) { if (!/print/.test(r.conditionText)) collectRules(r.cssRules, out); }
    else if ('cssRules' in r) collectRules((r as CSSGroupingRule).cssRules, out);   // @layer, @supports
  }
}

async function toDataUrl(url: string): Promise<string> {
  const blob = await (await fetch(url)).blob();
  return await new Promise((res, rej) => { const fr = new FileReader(); fr.onload = () => res(fr.result as string); fr.onerror = rej; fr.readAsDataURL(blob); });
}

/** The paper's CSS plus the KaTeX fonts as data URLs (an SVG image cannot fetch files). */
function pageCss(): Promise<string> {
  cssCache ??= (async () => {
    const out: string[] = [];
    const fonts: Promise<string>[] = [];
    for (const sheet of Array.from(document.styleSheets)) {
      let rules: CSSRuleList;
      try { rules = sheet.cssRules; } catch { continue; }           // cross-origin sheet
      collectRules(rules, out);
      const walk = (list: CSSRuleList) => {
        for (const r of Array.from(list)) {
          if (r instanceof CSSFontFaceRule && /KaTeX/i.test(r.style.getPropertyValue('font-family'))) {
            const src = r.style.getPropertyValue('src');
            const m = src.match(/url\(["']?([^"')]+\.woff2[^"')]*)["']?\)/) ?? src.match(/url\(["']?([^"')]+)["']?\)/);
            if (!m) continue;
            const abs = new URL(m[1], sheet.href || location.href).href;
            const family = r.style.getPropertyValue('font-family');
            const weight = r.style.getPropertyValue('font-weight') || 'normal';
            const style = r.style.getPropertyValue('font-style') || 'normal';
            fonts.push(toDataUrl(abs).then((d) => `@font-face{font-family:${family};font-weight:${weight};font-style:${style};src:url(${d})}`));
          } else if ('cssRules' in r) walk((r as CSSGroupingRule).cssRules);
        }
      };
      walk(rules);
    }
    return [...(await Promise.all(fonts)), ...out].join('\n');
  })();
  return cssCache;
}

const loadImage = (src: string) => new Promise<HTMLImageElement>((res, rej) => {
  const img = new Image();
  img.onload = () => res(img);
  img.onerror = () => rej(new Error('Could not draw the paper.'));
  img.src = src;
});

/** Draw the rows of `el` from `from` to `to` (CSS px) into a canvas at `scale`. */
async function rasterize(el: HTMLElement, from: number, to: number, scale: number): Promise<HTMLCanvasElement> {
  const rect = el.getBoundingClientRect();
  const w = Math.ceil(rect.width), total = Math.ceil(rect.height), h = Math.max(1, Math.ceil(to - from));
  const host = document.createElementNS(NS_XHTML, 'div') as HTMLElement;
  host.setAttribute('class', 'exam-raster');
  host.setAttribute('style', `position:static;left:0;width:${w}px;background:#fff;`);
  host.appendChild(el.cloneNode(true));
  const xhtml = new XMLSerializer().serializeToString(host);
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 ${from} ${w} ${h}">` +
    `<style>${(await pageCss()).replace(/</g, '\\3c ')}</style>` +
    `<foreignObject x="0" y="0" width="${w}" height="${total}">${xhtml}</foreignObject></svg>`;
  const src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);

  const canvas = document.createElement('canvas');
  canvas.width = Math.round(w * scale); canvas.height = Math.round(h * scale);
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, canvas.width, canvas.height);
  const img = await loadImage(src);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  return canvas;
}

export async function buildExamPdf(parts: HTMLElement[], onProgress?: (done: number, total: number) => void): Promise<Blob> {
  await document.fonts?.ready;
  const { jsPDF } = await import('jspdf');
  const pxPerMm = parts[0].getBoundingClientRect().width / CONTENT_W;

  // Lay out every part first so the footer can say "of N".
  const plan = parts.map((el) => ({ el, spans: pageSpans(el, pxPerMm) }));
  const totalPages = plan.reduce((n, p) => n + p.spans.length, 0);

  const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait', compress: true });
  // The first draw can use fallback fonts while the embedded ones decode; draw once and discard.
  await rasterize(plan[0].el, 0, 20, 1);
  const SCALE = 2;
  let page = 0;
  for (const { el, spans } of plan) {
    for (const [from, to] of spans) {
      if (page > 0) doc.addPage();
      page++;
      const canvas = await rasterize(el, from, to, SCALE);
      doc.addImage(canvas.toDataURL('image/jpeg', 0.92), 'JPEG', MARGIN.x, MARGIN.top, CONTENT_W, (to - from) / pxPerMm);
      doc.setFont('times', 'normal'); doc.setFontSize(9); doc.setTextColor(90);
      doc.text(`Page ${page} of ${totalPages}`, PAGE_W / 2, PAGE_H - 9, { align: 'center' });
      onProgress?.(page, totalPages);
      await new Promise((r) => setTimeout(r, 0));     // let the progress paint
    }
  }
  return doc.output('blob');
}
