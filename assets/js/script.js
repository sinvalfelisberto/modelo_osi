const layers = [
    { n: 1, name: "Física", pdu: "Bits", examples: "Cabos, Hubs, Repetidores", desc: "Transmissão bruta de bits pelo meio físico (elétrico, óptico ou rádio)." },
    { n: 2, name: "Enlace", pdu: "Quadros (Frames)", examples: "Switch, Bridge, Ethernet, Wi-Fi", desc: "Detecção de erros e controle de fluxo entre dois nós diretamente conectados." },
    { n: 3, name: "Rede", pdu: "Pacotes", examples: "Roteador, IP, ICMP", desc: "Roteamento de dados entre diferentes redes. Decide o melhor caminho." },
    { n: 4, name: "Transporte", pdu: "Segmentos (TCP) / Datagramas (UDP)", examples: "TCP, UDP", desc: "Garante a entrega das mensagens de ponta a ponta com correção de erros." },
    { n: 5, name: "Sessão", pdu: "Dados", examples: "NetBIOS, SQL", desc: "Estabelece, gerencia e finaliza as comunicações entre aplicações." },
    { n: 6, name: "Apresentação", pdu: "Dados", examples: "JPEG, ASCII, Criptografia", desc: "Traduz, compacta e criptografa os dados para que a aplicação entenda." },
    { n: 7, name: "Aplicação", pdu: "Dados", examples: "HTTP, DNS, FTP, SMTP", desc: "Interface direta com o usuário e softwares (navegadores, e-mail)." }
];

const stackContainer = document.getElementById('osi-stack');
const contentDisplay = document.getElementById('content-display');
const placeholder = document.getElementById('placeholder-text');

// Variável para armazenar a referência do card da Camada 7
let layer7Card = null;

layers.forEach(layer => {
    const div = document.createElement('div');
    div.className = 'layer-card';
    div.innerText = `${layer.n}. Camada de ${layer.name}`;
    
    div.onclick = () => {
        // Remover classe ativa de todos
        document.querySelectorAll('.layer-card').forEach(c => c.classList.remove('active'));
        div.classList.add('active');

        // Atualizar painel
        placeholder.classList.add('hidden');
        contentDisplay.classList.remove('hidden');
        
        document.getElementById('layer-title').innerText = `Camada ${layer.n}: ${layer.name}`;
        document.getElementById('layer-description').innerText = layer.desc;
        document.getElementById('layer-pdu').innerText = layer.pdu;
        document.getElementById('layer-examples').innerText = layer.examples;
    };

    stackContainer.appendChild(div);

    // Salva a referência se for a camada 7
    if (layer.n === 7) {
        layer7Card = div;
    }
});

// Executa o clique na Camada 7 assim que o script terminar de carregar
if (layer7Card) {
    layer7Card.click();
}