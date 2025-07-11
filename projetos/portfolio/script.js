
    const botaoModo = document.getElementById('modoEscuro');
    const body = document.body;
    
    // Verifica preferência
    const temaAtual = localStorage.getItem('tema') || 'light';
    if (temaAtual === 'dark') ativarModoEscuro();
    
    botaoModo.addEventListener('click', () => {
        body.hasAttribute('data-theme') 
            ? desativarModoEscuro() 
            : ativarModoEscuro();
    });
    
    function ativarModoEscuro() {
        body.setAttribute('data-theme', 'dark');
        botaoModo.textContent = 'Modo Claro';
        localStorage.setItem('tema', 'dark');
    }
    
    function desativarModoEscuro() {
        body.removeAttribute('data-theme');
        botaoModo.textContent = 'Modo Escuro';
        localStorage.setItem('tema', 'light');
    }

