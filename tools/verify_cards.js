#!/usr/bin/env node
// Usage: node verify_cards.js <daily-study-dir>
// Checks that the reference cards' data arrays still parse after editing.
const fs = require('fs'), path = require('path'), cp = require('child_process');
const dir = process.argv[2];
if (!dir) { console.error('usage: node verify_cards.js <daily-study-dir>'); process.exit(1); }
const CARDS = {
  'card-verbos.html': ['VERBOS'],
  'card-vocabulario.html': ['VOC'],
  'card-pessoas.html': ['COUNTRIES', 'PROFESSIONS'],
  'card-alfabeto.html': ['ALFABETO', 'NUMEROS_1_20', 'NUMEROS_DEZ', 'DIAS', 'MESES']
};
let fail = 0;
for (const [file, names] of Object.entries(CARDS)) {
  const html = fs.readFileSync(path.join(dir, file), 'utf8');
  for (const name of names) {
    const m = html.match(new RegExp('const ' + name + ' = '));
    if (!m) { console.error('✗', file, name, 'not found'); fail++; continue; }
    const start = m.index + m[0].length;
    const open = html[start], close = open === '[' ? ']' : '}';
    let depth = 0, i = start, inStr = null;
    for (; i < html.length; i++) {
      const c = html[i];
      if (inStr) { if (c === '\\') { i++; continue; } if (c === inStr) inStr = null; continue; }
      if (c === '"' || c === "'" || c === '`') { inStr = c; continue; }
      if (c === open) depth++;
      if (c === close) { depth--; if (!depth) break; }
    }
    try { new Function('return (' + html.slice(start, i + 1) + ')')(); console.log('✓', file, name); }
    catch (e) { console.error('✗', file, name, 'does not parse:', e.message); fail++; }
  }
}
// bank must also parse if present
try {
  const bank = fs.readFileSync(path.join(dir, 'bank.js'), 'utf8');
  new Function(bank + '; return BANK;')();
  console.log('✓ bank.js parses');
} catch (e) { console.error('✗ bank.js:', e.message); fail++; }
process.exit(fail ? 1 : 0);
