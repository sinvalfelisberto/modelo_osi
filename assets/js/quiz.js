const questions = [
    { q: "Qual camada é responsável pela transmissão de bits pelo meio físico?", a: "B", options: {A: "Camada de Rede", B: "Camada Física", C: "Camada de Enlace"} },
    { q: "Quantas camadas compõem o Modelo OSI?", a: "B", options: {A: "Cinco camadas", B: "Sete camadas", C: "Oito camadas"} },
    { q: "Qual comando é usado para testar a conectividade básica entre dois nós?", a: "C", options: {A: "Ipconfig", B: "Getmac", C: "Ping"} },
    { q: "O protocolo HTTP opera em qual camada do Modelo OSI?", a: "A", options: {A: "Camada de Aplicação", B: "Camada de Transporte", C: "Camada de Sessão"} },
    { q: "Qual dispositivo opera principalmente na Camada 3 (Rede)?", a: "C", options: {A: "Hub", B: "Repetidor", C: "Roteador"} },
    { q: "Qual é a PDU (Unidade de Dados) da Camada de Enlace?", a: "B", options: {A: "Pacotes", B: "Quadros ou Frames", C: "Segmentos"} },
    { q: "Qual comando no Linux exibe os endereços IP das interfaces?", a: "A", options: {A: "ip addr show", B: "ifconfig /all", C: "route print"} },
    { q: "Qual camada garante a entrega de mensagens de ponta a ponta?", a: "B", options: {A: "Camada de Rede", B: "Camada de Transporte", C: "Camada de Apresentação"} },
    { q: "Uma nova camada no Modelo OSI é criada quando há necessidade de quê?", a: "B", options: {A: "Mais velocidade", B: "Mais abstração", C: "Menos protocolos"} },
    { q: "Qual comando é usado para verificar a tabela de endereços MAC no Windows?", a: "C", options: {A: "nslookup", B: "netstat -an", C: "arp -a"} }
];

const quizContainer = document.getElementById('quiz-container');

// Renderização inicial
questions.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.innerHTML = `
        <h3>${index + 1}. ${item.q}</h3>
        <div class="options-container">
            <label class="option-label"><input type="radio" name="q${index}" value="A"> ${item.options.A}</label>
            <label class="option-label"><input type="radio" name="q${index}" value="B"> ${item.options.B}</label>
            <label class="option-label"><input type="radio" name="q${index}" value="C"> ${item.options.C}</label>
        </div>
    `;
    quizContainer.appendChild(card);
});

// Ação de finalizar
document.getElementById('submit-quiz').onclick = function() {
    let score = 0;

    questions.forEach((item, index) => {
        const options = document.getElementsByName(`q${index}`);
        let selected = "";
        
        options.forEach(opt => {
            const label = opt.parentElement;
            if (opt.checked) selected = opt.value;
            
            if (opt.value === item.a) {
                label.classList.add('correct');
            } else if (opt.checked && opt.value !== item.a) {
                label.classList.add('wrong');
            }
            opt.disabled = true; // Trava para revisão
        });

        if (selected === item.a) score++;
    });

    // Mostra o modal apenas após o cálculo
    const modal = document.getElementById('modal-result');
    const title = document.getElementById('modal-title');
    document.getElementById('modal-score').innerText = `Nota: ${score} / 10`;

    if (score >= 7) {
        title.innerText = "🎉 Parabéns!";
        title.style.color = "#27ae60";
    } else {
        title.innerText = "Continue Estudando!";
        title.style.color = "#e67e22";
    }

    modal.classList.remove('hidden');
    this.classList.add('hidden');
    document.getElementById('retry-bottom').classList.remove('hidden');
};

// Funções de Fechar o Modal
document.getElementById('close-modal').onclick = () => {
    document.getElementById('modal-result').classList.add('hidden');
};

window.onclick = (event) => {
    const modal = document.getElementById('modal-result');
    if (event.target === modal) {
        modal.classList.add('hidden');
    }
};