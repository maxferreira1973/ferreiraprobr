---
titulo: "Gerar uma resposta não é o mesmo que validar essa resposta"
resumo: "Notas sobre o guia de Himanshu Sharma com 17 modos de falha dos LLMs e 4 falhas dos usuários, e por onde eu começaria em workflows e agentes."
data: 2026-11-02
linkedin: "https://www.linkedin.com/feed/update/urn:li:share:7522976116492414977"
typefully: 11624293
fonte:
  titulo: "Four LLM Failure Modes and One User Failure Mode"
  autor: "Himanshu Sharma (Optimize Smart)"
  url: "https://optimizesmart.com/blog/four-llm-failure-modes-and-one-user-failure-mode/"
  idioma: "en"
tags: ["IA", "Agentes de IA", "LLM", "Automação", "n8n"]
---

Essa distinção é a ideia central de um guia do Himanshu Sharma sobre onde os LLMs falham, e onde nós, usuários, falhamos junto. Ele reuniu o que observou em projetos de automação, RAG e agentes de IA.

Os pontos que mais chamam a atenção:

- **O autor lista 17 modos de falha dos modelos em quatro grupos:** entender a pergunta, seguir instruções e contexto, revisar após feedback e usar ferramentas.
- **Alguns são bem conhecidos (citações inventadas, excesso de certeza), outros passam despercebidos:** truncar um documento longo sem avisar ou relatar uma ação que não foi executada.
- **Do lado do usuário, ele aponta 4 falhas:** especificar mal o pedido, aceitar a primeira resposta, pressionar demais (ou de menos) e o cansaço depois de muitas rodadas de revisão.
- **Entre as defesas:** definições operacionais claras, conferir fatos na fonte, pedir correções pontuais em vez de reescritas e limitar as permissões das ferramentas.

## Meu comentário

Para quem monta workflows no n8n ou agentes de atendimento, eu começaria pelo item mais simples de implementar: separar status como "planejado", "executado" e "confirmado" em cada ação do agente. Um agente que diz "agendei" sem a confirmação da API é exatamente o tipo de erro que só aparece quando o cliente reclama.
