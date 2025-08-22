// Importa a biblioteca 'prompt-sync' para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();

// Pergunta ao usuário qual operação deseja realizar (soma ou subtração)
let operador = prompt("Digite 'soma' ou 'subtração': ");

// Converte a resposta para minúsculas para evitar problemas com maiúsculas/minúsculas
operador = operador.toLocaleLowerCase();

// Verifica se o operador é válido (soma ou subtração)
if (operador === "soma" || operador === "subtração") {

  // Pede ao usuário o primeiro número e converte para inteiro
  let number1 = parseInt(prompt("Digite o primeiro número da operação: "));

  // Pede ao usuário o segundo número e converte para inteiro
  let number2 = parseInt(prompt("Digite o segundo número da operação: "));

  // Mostra o resultado no console, chamando a função 'conta' que faz o cálculo
  console.log(
    "O resultado da sua " +
    operador +
    " é " +
    conta(operador, number1, number2)
  );

} else {
  // Caso o operador seja inválido, exibe uma mensagem de erro
  console.log("Alguma informação está incorreta, tente novamente.");
}

// Função que realiza a operação de soma ou subtração
function conta(sinal, number1, number2) {
  let resultado;

  // Se o sinal for 'soma', realiza a soma
  if (sinal === "soma") {
    resultado = number1 + number2;

  // Se o sinal for 'subtração', realiza a subtração
  } else if (sinal === "subtração") {
    resultado = number1 - number2;

  // Se for algum outro valor (não deveria acontecer por causa da validação anterior)
  } else {
    resultado = "Valor incorreto";
  }

  // Retorna o resultado da operação
  return resultado;
}
