// ==========================================
// 1. INICIALIZAÇÃO PADRÃO DO GA4
// ==========================================
window.dataLayer = window.dataLayer || [];

function gtag(){
    window.dataLayer.push(arguments);
}

// Adicione o parâmetro 'debug_mode': true dentro do seu config
gtag('config', 'G-723EDXBFFS', {
    'debug_mode': true,
    'page_title': document.title
});

gtag('js', new Date());
gtag('config', 'G-723EDXBFFS');


// ==========================================
// 2. RASTREAMENTO DO CLIQUE (EVENTO PERSONALIZADO)
// ==========================================

// Usamos o 'DOMContentLoaded' para garantir que o código só vai procurar 
// o botão DEPOIS que todo o HTML da página estiver carregado.
document.addEventListener('DOMContentLoaded', function() {
    
    // Procura o botão pelo ID que você definiu no seu HTML (ex: id="btn-download")
    const botaoDownload = document.getElementById('exportPdfBtn');
    
    // Verifica se o botão realmente existe na página atual antes de aplicar o evento
    if (botaoDownload) {
        botaoDownload.addEventListener('click', function() {
            
            // Dispara o evento personalizado para o GA4 via dataLayer
            gtag('event', 'download_curriculo', {
                'formato_arquivo': 'PDF',
                'nome_arquivo': 'curriculo_max.pdf',
                'local_clique': 'menu_superior'
            });
            
            console.log('Evento de download enviado para o GA4!');
        });
    }
});