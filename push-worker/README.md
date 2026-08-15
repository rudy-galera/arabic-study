# Push worker — Treino de Árabe 🔔

Manda as notificações estilo Duolingo (12:00, 18:00 e 21:30 de Dubai) e **pula o
dia em que você já treinou**. Roda de graça no plano free do Cloudflare Workers.

## Deploy (uma vez só, ~10 min)

Pré-requisito: `npm install -g wrangler` e `wrangler login` (sua conta Cloudflare,
a mesma do finance app).

```bash
cd "$HOME/Documents/Claude/Projects/rudy-life-os/01-life-areas/personal-development/arabic-course/daily-study/push-worker"

# 1. criar o KV que guarda inscrições + dias feitos
wrangler kv namespace create SUBS
#    → copie o "id" que ele imprimir para dentro do wrangler.toml (linha id = ...)

# 2. guardar a chave privada VAPID como secret (cole a linha inteira)
wrangler secret put VAPID_PRIVATE_JWK
#    quando pedir o valor, cole EXATAMENTE isto (uma linha):
#    {"kty":"EC","x":"kbRm3tuWVmIzefBeGKJEhied50dVpGdeqs0EP4AaXe0","y":"hJ3GIrmpOmWEWhavmdPihJlDW5LOb5bsDuPbbMntNfU","crv":"P-256","d":"g23YgJYLByB_AUhBJ6oV87Ws-WDtpFnBf9D0B9QJcnI"}

# 3. publicar
wrangler deploy
#    → ele imprime a URL, algo como https://arabic-push.SEU-SUB.workers.dev
```

## Ligar o site ao worker

1. Abra `engine.js` (na pasta daily-study) e preencha na primeira linha do
   PUSH_CONFIG: `workerUrl: 'https://arabic-push.SEU-SUB.workers.dev'` (a URL do passo 3).
2. Commit + push do site (o comando de sempre).
3. **No iPhone**: abra o site pela Tela de Início (tem que ser o app instalado,
   não o Safari), toque em **🔔 Ativar notificações diárias** e aceite.

Pronto. Testes rápidos:
- `curl https://arabic-push.SEU-SUB.workers.dev/health` → `ok`
- Disparo manual de teste: `wrangler triggers deploy` não é preciso; use
  `curl -X POST .../done -H 'Content-Type: application/json' -d '{"date":"2020-01-01"}'`
  só para ver o `{"ok":true}`.

## Como funciona

- O site registra a inscrição de push no worker (`/subscribe`).
- Ao concluir o treino, o site avisa `/done` com a data — aí o cron do dia
  **não** te incomoda.
- O push vai **sem payload**; quem escolhe a frase engraçada é o `sw.js` no
  seu iPhone (lista local de 24 frases).
- Chave pública VAPID já está no `wrangler.toml` e no `engine.js` (par gerado
  em 2026-08-15; a privada só existe como secret no Cloudflare).
