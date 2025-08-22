// Função que verifica se o número é par ou ímpar usando Promise
function verificandoNumber() {
  let numero = 2;           // Define o número inicial
  numero = numero / 2;      // Divide o número por 2 (nesse caso, 2 / 2 = 1)

  // Retorna uma nova Promise que resolve ou rejeita dependendo se 'numero' é inteiro
  return new Promise((resolve, reject) => {
    // Simula uma operação assíncrona que demora 1 segundo para completar
    setTimeout(() => {
      // Verifica se 'numero' é um número inteiro (ou seja, se é par)
      if (Number.isInteger(numero)) {
        resolve("par");    // Se for inteiro, a Promise é resolvida com a mensagem "par"
      } else {
        reject("impar");   // Se não for inteiro, a Promise é rejeitada com a mensagem "impar"
      }
    }, 1000);              // Espera 1 segundo antes de executar o código acima
  });
}

// Função que será chamada caso a Promise seja resolvida (sucesso)
function verificarNumber1(resultado1) {
  console.log("o Número é " + resultado1); // Imprime no console o resultado (ex: "o Número é par")
}

// Função que será chamada caso a Promise seja rejeitada (erro)
function verificarNumber(resultado2) {
  console.log("o Número é " + resultado2); // Imprime no console o erro (ex: "o Número é impar")
}


function deuRuim(){
  console.log('Não funcionou')
}

// Executa a função verificandoNumber e recebe uma Promise
const promise = verificandoNumber();

//.then() trata o resultado positivo da promise
// .catch() trata o resultado negativo

// Usa o método 'then' para definir as funções de sucesso e erro que serão executadas
promise.then(verificarNumber1, verificarNumber).catch(deuRuim);
