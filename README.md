# Modelo OSI (Open Systems Interconnection)

Este repositório é um guia didático e técnico sobre o **Modelo OSI**, o framework conceitual de 7 camadas que padroniza as funções de comunicação de rede, independentemente da tecnologia ou fabricante.

## 📌 Sobre o Projeto

O objetivo deste material é desmistificar o funcionamento das redes de computadores, detalhando como os dados são processados desde a interface do usuário até os impulsos elétricos ou sinais ópticos nos cabos.

## 🏗️ As 7 Camadas do Modelo OSI

O modelo é dividido em camadas, onde cada uma possui uma responsabilidade específica:

| Camada | Nome | Função Principal | Unidade (PDU) |
| :--- | :--- | :--- | :--- |
| **7** | **Aplicação** | Interface direta com softwares (HTTP, FTP, SMTP). | Dados |
| **6** | **Apresentação** | Tradução, criptografia e compressão de dados. | Dados |
| **5** | **Sessão** | Controle de diálogo entre aplicações. | Dados |
| **4** | **Transporte** | Controle de fluxo e correção de erros (TCP, UDP). | Segmento |
| **3** | **Rede** | Roteamento e endereçamento lógico (IP). | Pacote |
| **2** | **Enlace** | Endereçamento físico (MAC) e acesso ao meio. | Quadro (Frame) |
| **1** | **Física** | Transmissão de bits pelo meio físico (Cabos, RF). | Bits |

## 🚀 Conceitos Chave

* **Encapsulamento:** O processo de adicionar cabeçalhos (headers) aos dados conforme eles descem as camadas.
* **Desencapsulamento:** O processo reverso, onde cada camada remove seu cabeçalho correspondente ao receber os dados.
* **Interoperabilidade:** Como o modelo permite que sistemas diferentes se comuniquem de forma padronizada.

## 📂 Organização do Repositório

* `/teoria`: Explicações detalhadas de cada camada.
* `/diagramas`: Representações visuais do fluxo de dados.
* `/comparativos`: Diferenças entre o Modelo OSI e o Modelo TCP/IP.

## 🤝 Contribuições

Este é um projeto de código aberto. Se você encontrar algum erro ou quiser adicionar exemplos práticos, sinta-se à vontade para:
1. Abrir uma **Issue**
2. Enviar um **Pull Request**

---
Desenvolvido por [Sinval Felisberto](https://github.com/sinvalfelisberto)