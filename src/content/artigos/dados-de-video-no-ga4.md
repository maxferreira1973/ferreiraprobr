---
titulo: "Os dados de vídeo do GA4 estão lá, mas pouca gente sabe onde encontrá-los"
resumo: "Onde achar o engajamento com vídeos do YouTube no GA4, como ver qual vídeo foi assistido e até onde, segundo Julius Fedorovicius, do Analytics Mania."
data: 2026-11-16
linkedin: "https://www.linkedin.com/feed/update/urn:li:share:7528049537945501696"
typefully: 11940030
fonte:
  titulo: "Where to find video engagement data in Google Analytics 4"
  autor: "Julius Fedorovicius (Analytics Mania)"
  url: "https://www.analyticsmania.com/post/where-to-find-video-engagement-data-in-google-analytics-4/"
  idioma: "en"
tags: ["GA4", "Web Analytics", "Video Marketing", "Marketing Digital", "Métricas Digitais"]
---

Julius Fedorovicius, do Analytics Mania, atualizou um guia prático sobre onde achar o engajamento com vídeos do YouTube no GA4.

Principais pontos:

- **Primeiro, confirme em Admin > Data Streams se "Video engagement" está ativo** na medição otimizada (Enhanced Measurement).
- **Os relatórios padrão mostram os eventos video_start, video_progress e video_complete, mas não qual vídeo foi visto.** Para isso, use uma Exploration com Video title e Video URL.
- **Para ver até onde as pessoas assistiram (10%, 25%, 50% e 75%), é preciso registrar o parâmetro video_percent como custom dimension,** que só vale para dados novos.
- **A medição automática cobre apenas YouTube incorporado** e pode falhar com vídeos carregados depois da página (SPA, pop-ups, abas). Vimeo, Wistia e HTML5 pedem uma solução no GTM.

## Meu comentário

Muitas empresas investem em vídeo no site e acompanham só a visualização da página. Antes de concluir que ninguém assiste, vale checar se o embed do YouTube tem o parâmetro enablejsapi=1 e se o vídeo não está dentro de um carrossel ou modal. E registre a custom dimension logo: o histórico só começa a partir dela.
