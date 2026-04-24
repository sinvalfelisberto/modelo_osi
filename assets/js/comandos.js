function copyCode(elementId) {
    // Seleciona o texto dentro do <code>
    const text = document.getElementById(elementId).innerText;
    
    // Usa a API do navegador para copiar
    navigator.clipboard.writeText(text).then(() => {
        // Encontra o botão que foi clicado
        const btn = document.querySelector(`[onclick="copyCode('${elementId}')"]`);
        
        // Feedback visual
        const originalText = btn.innerText;
        btn.innerText = "Copiado!";
        btn.classList.add('copied');
        
        // Volta ao normal após 2 segundos
        setTimeout(() => {
            btn.innerText = originalText;
            btn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar: ', err);
    });
}