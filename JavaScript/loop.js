// Declarando a variável 'i' e iniciando com 0
let i = 0;

// Estrutura de repetição FOR
// Começa com i = 0, executa enquanto i for menor que 2, incrementando i a cada volta
for(i = 0 ; i < 2; i++){
     console.log(i + " vindo do for"); // Exibe o valor de i junto com o texto
}
// Saída do FOR:
// 0 vindo do for
// 1 vindo do for

// Estrutura de repetição DO...WHILE com um label chamado 'loopWhile'
// O DO...WHILE executa pelo menos uma vez antes de verificar a condição
loopWhile: do {
  console.log(i + " vindo do do...While"); // Exibe o valor de i
  i++; // Incrementa i a cada repetição
} while( i < 4); // Continua enquanto i for menor que 4
// Saída do DO...WHILE:
// 2 vindo do do...While
// 3 vindo do do...While

// Estrutura de repetição WHILE
while( i < 6){ // Enquanto i for menor que 6
    i++; // Incrementa i em 1
    console.log(i + " vindo do While"); // Exibe o valor de i
}
// Saída do WHILE:
// 4 vindo do While
// 5 vindo do While
// 6 vindo do While (incrementa para 6 e depois sai do loop porque a condição não é mais verdadeira)
