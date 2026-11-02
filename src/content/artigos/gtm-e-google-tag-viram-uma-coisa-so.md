---
titulo: "Google Tag Manager e Google Tag finalmente viraram uma coisa só"
resumo: "O que muda com o novo tagging experience do GTM, a partir da análise de Simo Ahava, e como migrar com segurança."
data: 2026-10-29
linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7521526556947533825/"
fonte:
  titulo: "Optimized Tagging Experience For Google Tag Manager"
  autor: "Simo Ahava"
  url: "https://www.simoahava.com/analytics/optimized-tagging-experience-google-tag-manager/"
  idioma: "en"
tags: ["Google Tag Manager", "GA4", "Web Analytics", "Marketing Digital", "Consent Mode"]
---

O Simo Ahava, referência em GTM e GA, publicou uma análise detalhada do novo "tagging experience" do GTM. Resumo do que muda:

- **O container do GTM passa a ser também uma Google Tag.** GA4, Ads e Floodlight entram como "destinos" do container, com configurações e permissões centralizadas.
- **Os destinos deixam de carregar o gtag.js como arquivo separado:** tudo vai dentro do próprio arquivo do GTM. Na visão do Simo, só o ganho de performance da página já justifica a migração.
- **Um assistente de otimização migra as Google Tags existentes.** As mudanças entram no workspace sem serem publicadas, e dá para reverter voltando a uma versão anterior.
- **Nova opção de transmissão de dados:** o GTM retém os hits até o consentimento ser concedido e depois os reenvia. Isso simplifica bastante o Basic Consent Mode, mas só funciona com tags do Google.

## Meu comentário

Antes de migrar, revise as configurações compartilhadas. Se as suas tags tinham configurações diferentes entre si, quem manda agora é o container.

Trate como uma migração de verdade: adicione os destinos aos poucos, teste no Preview e só então publique.
