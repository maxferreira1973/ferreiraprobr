---
titulo: "Nem todo evento do GA4 precisa passar pelo server-side GTM"
resumo: "Como dividir o envio de eventos do GA4 entre o container de servidor e o envio direto ao Google, segundo Simo Ahava, e por que documentar essa escolha."
data: 2026-11-12
linkedin: "https://www.linkedin.com/feed/update/urn:li:share:7526599989536628736"
typefully: 11782031
fonte:
  titulo: "#GTMTips: Split GA Events Between Client-Side And Server-Side Dispatch"
  autor: "Simo Ahava (simoahava.com)"
  url: "https://www.simoahava.com/gtmtips/split-ga-events-between-client-side-server-side-dispatch/"
  idioma: "en"
tags: ["Google Tag Manager", "GA4", "Server-Side GTM", "Web Analytics", "Marketing Digital"]
---

Simo Ahava mostrou, em uma de suas GTM Tips, como dividir o envio: parte dos eventos vai pelo container de servidor, parte segue direto para o Google. Os motivos que ele aponta: aliviar a carga do sGTM, não depender dele para eventos críticos e reduzir custo.

Como funciona, em resumo:

- **O roteamento é feito pelo parâmetro server_container_url.** Ele recomenda definir o endpoint do sGTM na Google Tag (o padrão passa a ser o servidor) e repetir numa Event Settings Variable como salvaguarda.
- **Para mandar uma tag específica direto ao Google, adicione o parâmetro na própria tag com valor vazio.** O valor definido na tag tem prioridade.
- **Use string vazia ou null, nunca undefined:** o GTM ignora o campo e o override não acontece.
- **Se parte dos eventos passa pelo sGTM, o client GA4 do servidor precisa usar identidade JavaScript Managed.** Com Server Managed, os dois caminhos geram client IDs diferentes.

## Meu comentário

Para quem roda sGTM com orçamento apertado, um bom começo é listar os eventos de alto volume e pouco impacto no negócio como candidatos a ir direto. E documente a escolha: um campo vazio parece erro, e alguém vai "corrigir". O próprio Simo sugere guardar esse valor numa variável com nome claro.
