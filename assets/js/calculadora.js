document.getElementById('calc-btn').onclick = function() {
    const ip = document.getElementById('ip-input').value;
    const cidr = parseInt(document.getElementById('cidr-input').value);

    if (!validateIP(ip) || isNaN(cidr) || cidr < 0 || cidr > 32) {
        alert("Por favor, insira um IP válido e um CIDR entre 0 e 32.");
        return;
    }

    // Converte IP para número de 32 bits
    const ipUint32 = ipToUint32(ip);
    
    // Calcula máscara de bits
    const maskUint32 = cidr === 0 ? 0 : ~(Math.pow(2, 32 - cidr) - 1) >>> 0;
    
    // Rede e Broadcast
    const networkUint32 = (ipUint32 & maskUint32) >>> 0;
    const broadcastUint32 = (networkUint32 | ~maskUint32) >>> 0;

    // Quantidade de hosts
    const hosts = cidr >= 31 ? 0 : Math.pow(2, 32 - cidr) - 2;

    // Exibe resultados
    document.getElementById('res-network').innerText = uint32ToIp(networkUint32);
    document.getElementById('res-mask').innerText = uint32ToIp(maskUint32);
    document.getElementById('res-broadcast').innerText = uint32ToIp(broadcastUint32);
    document.getElementById('res-first').innerText = cidr >= 31 ? "N/A" : uint32ToIp(networkUint32 + 1);
    document.getElementById('res-last').innerText = cidr >= 31 ? "N/A" : uint32ToIp(broadcastUint32 - 1);
    document.getElementById('res-hosts').innerText = hosts.toLocaleString();

    document.getElementById('result-panel').classList.remove('hidden');
};

function validateIP(ip) {
    const rgx = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return rgx.test(ip);
}

function ipToUint32(ip) {
    return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0;
}

function uint32ToIp(u) {
    return [
        (u >>> 24) & 0xFF,
        (u >>> 16) & 0xFF,
        (u >>> 8) & 0xFF,
        u & 0xFF
    ].join('.');
}