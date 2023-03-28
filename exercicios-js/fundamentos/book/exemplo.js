
/** 
 * instruções básicas de Js
 * exemplo 1:  Cria as variáveis para a mensagem de boas vindas
 */
let saudacoes = "Olá!";
let nome = "Luke ";
let mensagem = "Por favor, cheque seu pedido: ";
// Concatena as três variáveis acima para criar a mensagem de boas vindas
let sejaBemVindo = saudacoes + nome + mensagem;
console.log(sejaBemVindo)

/**
 * exemplo 2: cria variáveis para armazenar detalhes sobre a placa
 */
let placa = "Montague house";
let madeira= placa.length;
let totalGeral = madeira * 5;
let envio = 7;
let valorTotal = totalGeral + envio;
console.log("placa: " + placa
 + ", largura m2: " + madeira
 + ", total geral: " + totalGeral
 + ", frete: " +envio
 + " Valor total: " + valorTotal);