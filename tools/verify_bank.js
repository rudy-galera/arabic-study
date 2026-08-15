#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────
// verify_bank.js — verificação mecânica do bank.js (rodar após QUALQUER
// edição do banco, antes do push). Uso: node tools/verify_bank.js
// Sai com código 1 se houver problema.
// ─────────────────────────────────────────────────────────────────────
const fs = require('fs');
const path = require('path');
const problems = [];

let BANK;
try {
  const src = fs.readFileSync(path.join(__dirname, '..', 'bank.js'), 'utf8');
  BANK = new Function(src + '; return BANK;')();
} catch (e) {
  console.error('✗ bank.js não parseia:', e.message);
  process.exit(1);
}

const CATS = ['numeros','dias','profissoes','verbos','vocab','familia','perguntas','possessivos'];
const PERSONS8 = ['Eu','Você (m)','Você (f)','Ele','Ela','Nós','Vocês','Eles/Elas'];

// 1. categorias presentes e não-vazias
for (const c of [...CATS, 'escrita', 'leitura', 'quotes']) {
  if (!Array.isArray(BANK[c]) || !BANK[c].length) problems.push(`categoria vazia/ausente: ${c}`);
}

// 2. ids únicos
const ids = CATS.flatMap(c => (BANK[c] || []).map(i => i.id));
const dup = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dup.length) problems.push('ids duplicados: ' + [...new Set(dup)].join(', '));

// 3. campos obrigatórios
for (const c of CATS) {
  for (const it of BANK[c] || []) {
    if (!it.id) problems.push(`${c}: item sem id (${JSON.stringify(it).slice(0,60)})`);
    if (c === 'profissoes') {
      if (!it.pt || !it.aziM || !it.aziF || !it.arM || !it.arF) problems.push(`profissoes ${it.id}: falta forma m/f`);
    } else if (c === 'verbos') {
      if (!it.pt || !it.conj) { problems.push(`verbos ${it.id}: sem conj`); continue; }
      for (const p of PERSONS8) if (!it.conj[p] || !it.conj[p].ar || !it.conj[p].arabizi)
        problems.push(`verbos ${it.id}: conj incompleta para ${p}`);
    } else if (c === 'possessivos') {
      if (!it.forms || Object.keys(it.forms).length < 8) problems.push(`possessivos ${it.id}: menos de 8 formas`);
      if (!it.src) problems.push(`possessivos ${it.id}: sem src (fonte atestada)`);
    } else {
      if (!it.pt || !it.ar || !it.arabizi) problems.push(`${c} ${it.id}: falta pt/ar/arabizi`);
    }
  }
}

// 4. escrita/leitura: toda frase precisa de fonte atestada
for (const e of BANK.escrita || []) {
  if (!e.pt || !e.ar || !e.arabizi || !e.src) problems.push(`escrita ${e.id}: falta pt/ar/arabizi/src`);
}
for (const l of BANK.leitura || []) {
  if (!l.src || !l.items || !l.items.length) problems.push(`leitura ${l.id}: sem src/items`);
  for (const s of l.items || []) if (!s.pt || !s.ar || !s.arabizi) problems.push(`leitura ${l.id}: sentença incompleta`);
}

// 5. convenções conhecidas (ver references/conventions.md do skill)
const all = JSON.stringify(BANK);
if (/عزف|3azaf/i.test(all)) problems.push('CONVENÇÃO: عزف/3azaf encontrado — instrumento é لعب/la3ab (correção do Rudy)');

// 6. distratores possíveis: cada categoria MCQ precisa de ≥4 rótulos distintos
for (const c of CATS) {
  const labels = new Set((BANK[c] || []).map(i => i.arabizi || i.aziM).filter(Boolean));
  if (c !== 'possessivos' && labels.size < 4) problems.push(`${c}: menos de 4 rótulos distintos para montar opções`);
}

if (problems.length) {
  console.error(`✗ ${problems.length} problema(s):`);
  for (const p of problems) console.error('  -', p);
  process.exit(1);
}
const counts = Object.fromEntries(Object.entries(BANK).filter(([k,v]) => Array.isArray(v)).map(([k,v]) => [k, v.length]));
console.log('✓ bank.js OK ·', JSON.stringify(counts));
