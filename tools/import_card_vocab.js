// tools/import_card_vocab.js — puts every card-vocabulario word into the Treino drill.
// Idempotent: skips any word whose arabizi already exists anywhere in the bank.
// Usage: node tools/import_card_vocab.js <daily-study-dir>
const fs = require('fs'), path = require('path');
const DIR = process.argv[2] || path.join(__dirname, '..');
const P = f => path.join(DIR, f);

function extract(html, name) {
  const m = html.match(new RegExp('const ' + name + '\\s*=\\s*'));
  const start = m.index + m[0].length, open = html[start], close = open === '[' ? ']' : '}';
  let depth = 0, i = start, inStr = null;
  for (; i < html.length; i++) {
    const c = html[i];
    if (inStr) { if (c === '\\') { i++; continue; } if (c === inStr) inStr = null; continue; }
    if (c === '"' || c === "'" || c === '`') { inStr = c; continue; }
    if (c === open) depth++;
    if (c === close) { depth--; if (!depth) break; }
  }
  return new Function('return (' + html.slice(start, i + 1) + ')')();
}

const VOC = extract(fs.readFileSync(P('card-vocabulario.html'), 'utf8'), 'VOC');
let s = fs.readFileSync(P('bank.js'), 'utf8');
const i0 = s.indexOf('{', s.indexOf('const BANK'));
const hdr = s.slice(0, i0);
const B = JSON.parse(s.slice(i0, s.lastIndexOf('};') + 1));

const norm = x => (x || '').toLowerCase().replace(/^el-/, '').replace(/[^a-z0-9]/g, '');
const have = new Set();
for (const k of ['vocab', 'familia', 'perguntas', 'dias', 'numeros']) for (const it of B[k]) have.add(norm(it.arabizi));
for (const p of B.profissoes) { have.add(norm(p.aziM)); have.add(norm(p.aziF)); }
const ids = new Set(Object.values(B).filter(Array.isArray).flat().map(x => x && x.id));

// card categories already fully represented elsewhere in the drill
const SKIP = new Set(['profissoes', 'dias']);
const slug = t => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40);
let added = 0; const per = {};
for (const [cat, c] of Object.entries(VOC)) {
  if (SKIP.has(cat)) continue;
  const label = (c.label || cat).split(/[,(]/)[0].trim();
  for (const it of c.items || []) {
    if (!it.pt || !it.ar || !it.arabizi) continue;
    const k = norm(it.arabizi);
    if (!k || have.has(k)) continue;
    let id = `voc-${cat}-${slug(it.arabizi) || slug(it.pt)}`, n = 2;
    while (ids.has(id)) id = `voc-${cat}-${slug(it.arabizi) || slug(it.pt)}-${n++}`;
    B.vocab.push({ id, cat, catLabel: label, pt: it.pt, ar: it.ar, arabizi: it.arabizi, imp: 1 });
    ids.add(id); have.add(k); added++; per[cat] = (per[cat] || 0) + 1;
  }
}
fs.writeFileSync(P('bank.js'), hdr + JSON.stringify(B, null, 1) + ';\n');
console.log('added', added, JSON.stringify(per), '→ vocab total', B.vocab.length);
