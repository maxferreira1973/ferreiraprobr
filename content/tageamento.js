// 1. Garante que o objeto dataLayer exista globalmente no navegador
window.dataLayer = window.dataLayer || [];

// 2. Define a função de atalho 'gtag' para enviar dados ao GA4
function gtag(){
    window.dataLayer.push(arguments);
}

// 3. Inicializa a biblioteca registrando o horário atual do disparo
gtag('js', new Date());

// 4. Executa a linha de comando de configuração que dispara o Pageview
// Substitua o 'G-XXXXXXXXXX' pelo ID real da sua tag de fluxo do GA4
gtag('config', 'G-723EDXBFFS', {
    'page_title': document.title,            // Captura o título da página automaticamente
    'page_path': window.location.pathname,    // Captura o caminho (ex: /curriculo)
    'page_location': window.location.href     // Captura a URL completa
});