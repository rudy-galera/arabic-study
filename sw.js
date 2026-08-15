// ─────────────────────────────────────────────────────────────────────
// sw.js — service worker do Treino Diário
// Recebe pushes SEM payload do worker (Cloudflare) e mostra uma
// notificação com frase motivacional rotativa. Clique → abre o treino.
// ─────────────────────────────────────────────────────────────────────

const QUOTES = [
  "Shukran por aparecer ontem. Hoje de novo? 🔥",
  "A professora sabe quando você não estuda. 👀",
  "10 minutinhos. Menos que uma scrollada no LinkedIn. 📱",
  "556 dias de Duolingo e você não desiste. Aqui é que o árabe de verdade mora. 💪",
  "Ma3lesh se ontem foi corrido — mas hoje o treino te espera. 🧆",
  "Seu streak está com saudade. Aywa, ele sente. 🥺",
  "Quarta e sexta tem aula. Chegar afiado é outra vibe. ⚡",
  "Um treino por dia e o Egito inteiro vai te entender. 🐪",
  "Quem treina hoje, brilha na aula. Quem não treina... ma3lesh. 😅",
  "O árabe não vai se aprender sozinho, sa7by. 📖",
  "Falta pouco pro próximo marco. Não pare agora! 🏆",
  "Kolo tamam? Só depois do treino. ✅",
  "Sua streak vale mais que a do Duolingo — essa aqui te faz FALAR. 🗣️",
  "5 minutos de fim de semana. Só isso. Depois pode voltar pro sofá. 🛋️",
  "Bokra você agradece o treino de hoje. 🙏",
  "Treinou hoje? Se não: agora. Se sim: mabsut! 😎",
  "O camelo anda um passo de cada vez. Vá fazer o seu. 🐫",
  "Imagina falar árabe com o pessoal do Egito nas férias. Começa hoje. ✈️",
  "Saba7 el-5er! O treino de hoje está pronto. ☕",
  "Masaa el-5er! Ainda dá tempo de manter a chama. 🔥",
  "Sua professora egípcia ia ficar orgulhosa. Ou vai. Depende de você. 🇪🇬",
  "El-sa3a kam? Hora do árabe. ⏰",
  "Não quebra a corrente. Você sabe como dói recomeçar do zero. ⛓️",
  "Feliz é quem treina: mabsut. Você hoje: ? 🤔"
];

self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));

self.addEventListener('push', event => {
  let body = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  let title = 'عَرَبي · Treino de árabe';
  // se o worker mandar payload JSON {title, body}, respeita
  if (event.data) {
    try {
      const d = event.data.json();
      if (d.body) body = d.body;
      if (d.title) title = d.title;
    } catch (e) { /* push sem payload — usa frase local */ }
  }
  event.waitUntil(self.registration.showNotification(title, {
    body,
    icon: 'icon-192.png',
    badge: 'icon-192.png',
    tag: 'treino-diario',
    data: { url: 'treino.html' }
  }));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil((async () => {
    const url = new URL('treino.html', self.registration.scope).href;
    const wins = await clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const w of wins) {
      if (w.url.includes('treino') && 'focus' in w) return w.focus();
    }
    return clients.openWindow(url);
  })());
});
