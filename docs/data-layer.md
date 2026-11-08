# Data layer — ferreira.pro.br

Contrato entre o site e o Google Tag Manager. O site só envia eventos para o `dataLayer`;
o GTM decide o que repassar ao GA4. Toda mudança de evento começa por este arquivo.

**Contêiner GTM:** definido em `src/config.ts` (`GTM_ID`). Versão publicada: **5, "v5 - higiene e consentimento"** (08/11/2026).
**Convenção de nomes:** português, minúsculas, `_` entre palavras, padrão `objeto_acao`.

## Organização do contêiner (GTM)

| Prefixo | Tipo | Exemplo |
| --- | --- | --- |
| `GT \|` | Tag do Google | `GT \| Google Tag (GA4 config)`, acionador Initialization - All Pages |
| `GA4 \|` | Tag de evento do GA4 | `GA4 \| curriculo_exportar` |
| `CE \|` | Acionador de evento personalizado | `CE \| curriculo_exportar` |
| `DLV \|` | Variável da camada de dados | `DLV \| metodo` |
| `CONST \|` | Constante | `CONST \| GA4 ID` = `G-723EDXBFFS` |

- As tags de evento usam `{{CONST | GA4 ID}}` como ID de medição: trocar de propriedade é uma alteração só.
- Pastas: **Base** (tag do Google e constantes), **Currículo**, **Artigos**, **Consentimento**.
- Nome de versão = número da versão (`v5 - …`, `v6 - …`), sempre com descrição do que mudou.

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

### `consentimento_atualizar`

Disparado quando o visitante clica em **Aceitar** ou **Recusar** no banner de cookies.

| Parâmetro | Tipo | Valores | Descrição |
| --- | --- | --- | --- |
| `analytics` | texto | `granted`, `denied` | Escolha para cookies de análise |

**Configuração no GTM** (versão 5): variável `DLV | analytics`, acionador `CE | consentimento_atualizar`
e tag `GA4 | consentimento_atualizar` com o parâmetro `analytics`.
No GA4: dimensão personalizada `analytics` (escopo de evento).

Limitação: só os aceites aparecem nos relatórios. Uma recusa vira ping sem cookies, que o GA4 não
mostra sem modelagem de consentimento (e o volume do site não basta para a modelagem). Use a contagem
de `consentimento_atualizar` com `analytics = granted` para acompanhar a taxa de aceite ao longo do tempo.

## Consent Mode v2 (modo avançado)

Implementado em `src/layouts/Base.astro` (padrão) e `src/components/ConsentBanner.astro` (banner).

1. **Antes do GTM**, `gtag('consent', 'default', …)` define tudo como `denied`, com `wait_for_update: 500`
   e `ads_data_redaction: true`. O site não tem anúncios: `ad_storage`, `ad_user_data` e
   `ad_personalization` ficam sempre negados.
2. Se o visitante já aceitou antes (`localStorage.consentimento_analytics = 'granted'`), um
   `gtag('consent', 'update', { analytics_storage: 'granted' })` roda logo em seguida, ainda antes do GTM.
3. O banner aparece enquanto não houver escolha. O clique faz `consent update`, grava a escolha e envia
   `consentimento_atualizar`. Ao recusar, os cookies `_ga*` existentes são apagados.
4. O link **Preferências de cookies**, no rodapé, reabre o banner.
5. Modo avançado: o GTM carrega sempre. Sem consentimento, a tag do Google envia pings sem cookies;
   as tags do GA4 têm verificação de consentimento integrada, sem acionador extra.

## Eventos substituídos

| Antigo | Onde estava | Destino |
| --- | --- | --- |
| `exportar_pdf_click` | `index.html` (push no dataLayer) | Substituído por `curriculo_exportar` |
| `download_curriculo` | `tagueamento.js` (gtag direto) | Substituído por `curriculo_exportar` |

## Próximos eventos (planejados)

`perfil_externo_clicar` (cliques em LinkedIn/GitHub fora dos artigos).

## Eventos da seção /artigos

Enviados ao dataLayer por `src/pages/artigos/[id].astro`.

**Configuração no GTM** (versão 4, "v3 - eventos de artigos"): variáveis `DLV | artigo_slug` e
`DLV | artigo_tag`; acionadores `CE | artigo_ler` e `CE | artigo_linkedin_clicar`; tags
`GA4 | artigo_ler` (parâmetros `artigo_slug`, `artigo_tag`) e `GA4 | artigo_linkedin_clicar` (`artigo_slug`).
No GA4: dimensões personalizadas `artigo_slug` e `artigo_tag` (escopo de evento).

### `artigo_ler`

Disparado uma vez por página quando houver leitura real, ou seja, as três condições ao mesmo tempo:

1. o leitor rolou a página (dispensado quando o artigo inteiro cabe na tela, sem rolagem);
2. 75% do texto do artigo já passou pela tela;
3. pelo menos 10 segundos desde a abertura da página.

Antes de 08/11/2026 bastava a condição 2, verificada já no carregamento: em telas altas o evento
disparava para quem só abria a página. Dados anteriores a essa data superestimam a leitura.

| Parâmetro | Tipo | Exemplo | Descrição |
| --- | --- | --- | --- |
| `artigo_slug` | texto | `gtm-e-google-tag-viram-uma-coisa-so` | Nome do arquivo do artigo |
| `artigo_tag` | texto | `Google Tag Manager` | Primeira tag do artigo |

### `artigo_linkedin_clicar`

Disparado no clique em "Publicado originalmente no LinkedIn".

| Parâmetro | Tipo | Exemplo | Descrição |
| --- | --- | --- | --- |
| `artigo_slug` | texto | `claude-code-ou-n8n-curva-de-aprendizado` | Nome do arquivo do artigo |
