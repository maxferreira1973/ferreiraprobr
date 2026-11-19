---
titulo: "Quando um template da galeria do GTM some ou não recebe a última atualização, onde você procura a causa?"
resumo: "A página de status de cada template na Community Template Gallery do GTM mostra disponibilidade, versão, histórico de commits e erros, segundo Simo Ahava."
data: 2026-11-19
linkedin: "https://www.linkedin.com/feed/update/urn:li:share:7529136914424201216"
typefully: 11940032
fonte:
  titulo: "GTM Tips: GTM template status page"
  autor: "Simo Ahava (simoahava.com)"
  url: "https://www.simoahava.com/gtmtips/gtm-template-status-page/"
  idioma: "en"
tags: ["Google Tag Manager", "Custom Templates", "Web Analytics", "Marketing Digital", "Análise de Dados"]
---

O Simo Ahava mostrou, em uma de suas GTM Tips, um recurso pouco conhecido: a página de status de cada template na Community Template Gallery do Google Tag Manager.

Principais pontos:

- **Para chegar até ela:** abra o template na galeria (pelo container ou em tagmanager.google.com/gallery) e clique em "Status" na barra lateral.
- **A página mostra se o template está disponível,** a versão atual (o hash do commit no GitHub) e o histórico de commits processados pelo importador, cada um com seu status.
- **As mensagens de erro apontam problemas** como arquivo de licença ou metadata.yaml ausente, falha ao ler o arquivo .tpl, repositório movido ou suspeita de malware. O Simo listou 19 delas.
- **Limitações que ele aponta:** algumas mensagens não batem com a realidade, não há data por linha e a página só existe depois do primeiro envio válido.

## Meu comentário

Se a sua implementação depende de um template da comunidade que parou de atualizar, a página de status ajuda a ver se o problema está no repositório do autor. Vale incluir essa checagem na revisão periódica do container, junto com as permissões e a origem de cada template em uso.
