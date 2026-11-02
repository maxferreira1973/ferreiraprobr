# Data layer — ferreira.pro.br

Contrato entre o site e o Google Tag Manager. O site só envia eventos para o `dataLayer`;
o GTM decide o que repassar ao GA4. Toda mudança de evento começa por este arquivo.

**Contêiner GTM:** definido em `src/config.ts` (`GTM_ID`).
**Convenção de nomes:** português, minúsculas, `_` entre palavras, padrão `objeto_acao`.

## Eventos

### `curriculo_exportar` — conversão principal

Disparado no clique do botão **Exportar PDF**, antes de abrir a janela de impressão.

| Parâmetro | Tipo | Valores | Descrição |
| --- | --- | --- | --- |
| `metodo` | texto | `impressao` | Como o PDF é gerado (hoje, impressão do navegador) |
| `posicao` | texto | `topo` | Onde está o botão clicado |

```js
window.dataLayer.push({
  event: 'curriculo_exportar',
  metodo: 'impressao',
  posicao: 'topo'
});
```

**Configuração no GTM**

1. Variáveis da camada de dados: `DLV | metodo` e `DLV | posicao`.
2. Acionador: `CE | curriculo_exportar` (evento personalizado).
3. Tag: `GA4 | curriculo_exportar`, com os parâmetros `metodo` e `posicao`.
4. No GA4: marcar `curriculo_exportar` como evento-chave e criar as dimensões personalizadas
   `metodo` e `posicao` (escopo de evento).

### `contato_clicar`

Disparado no clique do link **Fale comigo**, antes de abrir o app de e-mail.

| Parâmetro | Tipo | Valores | Descrição |
| --- | --- | --- | --- |
| `canal` | texto | `email` | Canal de contato escolhido |

**Configuração no GTM** (versão 3, "v2 - contato_clicar"): variável `DLV | canal`, acionador
`CE | contato_clicar` e tag `GA4 | contato_clicar` com o parâmetro `canal`.
No GA4: dimensão personalizada `canal` (escopo de evento).

## Eventos substituídos

| Antigo | Onde estava | Destino |
| --- | --- | --- |
| `exportar_pdf_click` | `index.html` (push no dataLayer) | Substituído por `curriculo_exportar` |
| `download_curriculo` | `tagueamento.js` (gtag direto) | Substituído por `curriculo_exportar` |

## Próximos eventos (planejados)

`perfil_externo_clicar`, `artigo_ler`, `artigo_linkedin_clicar`,
`consentimento_atualizar` — entram junto com a seção /artigos e o Consent Mode.
