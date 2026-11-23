---
titulo: "O alerta \"Container quality: Needs Attention\" do GTM merece confiança total?"
resumo: "Segundo Himanshu Sharma, o Tag Coverage Summary do GTM serve como guia geral, não como veredito: há falsos positivos e negativos, e um crawler ajuda a conferir."
data: 2026-11-23
linkedin: "https://www.linkedin.com/feed/update/urn:li:share:7530586468734492672"
typefully: 12105101
fonte:
  titulo: "Stop Trusting GA4 GTM Tag Coverage Report. Do This Instead"
  autor: "Himanshu Sharma (Optimize Smart)"
  url: "https://optimizesmart.com/blog/stop-trusting-ga4-gtm-tag-coverage-report-do-this-instead/"
  idioma: "en"
tags: ["Google Tag Manager", "GA4", "Web Analytics", "Tag Coverage", "Marketing Digital"]
---

Segundo o Himanshu Sharma, não. Ele analisa o relatório Tag Coverage Summary, que abre a partir do aviso "Some of your pages are not tagged". Os pontos principais:

- **Quatro abas:** Included pages, Not tagged, No recent activity e Tagged. Na visão do autor, o relatório serve como guia geral, não como fonte definitiva.
- **Falso positivo e falso negativo:** ele aponta o risco de uma página ser dada como sem tag quando tem, ou como tagueada quando não tem.
- **Páginas irrelevantes:** o relatório também pode sugerir URLs dinâmicas e páginas sem conteúdo.
- **Alternativa:** um crawler, o Screaming Frog SEO Spider, usando o Custom Search para varrer o código-fonte e procurar a tag em cada página. Ele cita sites com mais de 10.000 páginas.

## Meu comentário

Eu trataria o relatório do GTM como um alerta para investigar, não como veredito. Em sites com muitas landing pages de campanha e checkouts em outros domínios, vale cruzar o relatório com uma varredura própria antes de concluir que "está tudo coberto" ou que "falta tag". As comparações do autor com outras ferramentas são opinião dele, sem teste apresentado.
