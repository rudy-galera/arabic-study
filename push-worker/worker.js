// ─────────────────────────────────────────────────────────────────────
// worker.js — servidor de push do Treino Diário (Cloudflare Worker)
//
// Rotas:
//   POST /subscribe  { endpoint, keys:{p256dh, auth} }  → guarda inscrição
//   POST /done       { date: 'YYYY-MM-DD' }             → marca dia feito
//   GET  /health                                        → 'ok'
// Cron (wrangler.toml): 3× ao dia → manda push SEM payload para cada
// inscrição, PULANDO se o treino do dia (data de Dubai) já foi feito.
// O service worker do site escolhe a frase motivacional localmente.
//
// Secrets/vars necessários (ver README.md):
//   VAPID_PRIVATE_JWK  (secret)  — JWK da chave privada P-256
//   VAPID_PUBLIC_KEY   (var)     — applicationServerKey base64url
//   VAPID_SUBJECT      (var)     — 'mailto:rgalera@gmail.com'
// KV binding: SUBS
// ─────────────────────────────────────────────────────────────────────

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

function dubaiToday() {
  // Dubai = UTC+4, sem horário de verão
  const d = new Date(Date.now() + 4 * 3600 * 1000);
  return d.toISOString().slice(0, 10);
}

// ── base64url helpers ──
const b64u = {
  encode: buf => btoa(String.fromCharCode(...new Uint8Array(buf)))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''),
  decode: s => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0))
};

// ── VAPID JWT (ES256) ──
async function vapidHeaders(endpoint, env) {
  const url = new URL(endpoint);
  const aud = url.origin;
  const exp = Math.floor(Date.now() / 1000) + 12 * 3600;
  const header = b64u.encode(new TextEncoder().encode(JSON.stringify({ typ: 'JWT', alg: 'ES256' })));
  const payload = b64u.encode(new TextEncoder().encode(JSON.stringify({ aud, exp, sub: env.VAPID_SUBJECT })));
  const unsigned = `${header}.${payload}`;

  const jwk = JSON.parse(env.VAPID_PRIVATE_JWK);
  const key = await crypto.subtle.importKey('jwk', jwk, { name: 'ECDSA', namedCurve: 'P-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign({ name: 'ECDSA', hash: 'SHA-256' }, key, new TextEncoder().encode(unsigned));
  const jwt = `${unsigned}.${b64u.encode(sig)}`;

  return {
    'Authorization': `vapid t=${jwt}, k=${env.VAPID_PUBLIC_KEY}`,
    'TTL': '43200',
    'Urgency': 'normal'
  };
}

async function sendPush(sub, env) {
  const headers = await vapidHeaders(sub.endpoint, env);
  // push sem payload: o service worker mostra a frase localmente
  return fetch(sub.endpoint, { method: 'POST', headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === 'OPTIONS') return new Response(null, { headers: CORS });

    if (url.pathname === '/health') {
      return new Response('ok', { headers: CORS });
    }

    if (url.pathname === '/subscribe' && request.method === 'POST') {
      const sub = await request.json();
      if (!sub || !sub.endpoint) return new Response('bad sub', { status: 400, headers: CORS });
      const id = b64u.encode(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(sub.endpoint)));
      await env.SUBS.put('sub:' + id, JSON.stringify(sub));
      return new Response(JSON.stringify({ ok: true }), { headers: { ...CORS, 'Content-Type': 'application/json' } });
    }

    if (url.pathname === '/done' && request.method === 'POST') {
      const { date } = await request.json();
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date || '')) return new Response('bad date', { status: 400, headers: CORS });
      await env.SUBS.put('done:' + date, '1', { expirationTtl: 7 * 86400 });
      return new Response(JSON.stringify({ ok: true }), { headers: { ...CORS, 'Content-Type': 'application/json' } });
    }

    return new Response('Treino de Árabe push worker', { headers: CORS });
  },

  async scheduled(event, env, ctx) {
    const today = dubaiToday();
    const done = await env.SUBS.get('done:' + today);
    if (done) return; // já treinou hoje — sem cobrança 😌

    const list = await env.SUBS.list({ prefix: 'sub:' });
    for (const k of list.keys) {
      const raw = await env.SUBS.get(k.name);
      if (!raw) continue;
      const sub = JSON.parse(raw);
      try {
        const r = await sendPush(sub, env);
        if (r.status === 404 || r.status === 410) {
          await env.SUBS.delete(k.name); // inscrição morta
        }
      } catch (e) { /* tenta de novo no próximo cron */ }
    }
  }
};
