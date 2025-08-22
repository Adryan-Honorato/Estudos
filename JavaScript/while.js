// -------------------------------
// 1. WHILE
// -------------------------------
// O loop `while` executa o bloco de código ENQUANTO a condição for verdadeira.
// Ideal quando você não sabe exatamente quantas vezes vai repetir.

let contador = 0;

while (contador < 5) {
  console.log(`WHILE - contador = ${contador}`);
  contador++; // importante: atualizar a condição, senão vira loop infinito!
}
// Saída:
// WHILE - contador = 0
// WHILE - contador = 1
// ...

// Exemplo prático: somar até ultrapassar um valor
let soma = 0;
let numero = 1;

while (soma < 20) {
  soma += numero;
  console.log(`Somando: ${numero}, soma total = ${soma}`);
  numero++;
}

// -------------------------------
// 2. DO...WHILE
// -------------------------------
// O loop `do...while` executa o bloco PELO MENOS UMA VEZ, mesmo que a condição seja falsa.
// A condição é verificada após o primeiro bloco.

let tentativas = 0;
let senhaCorreta = false;

do {
  console.log(`Tentativa ${tentativas + 1}: verificando senha...`);
  tentativas++;

  // Simulação (só vai acertar na terceira tentativa)
  if (tentativas === 3) {
    senhaCorreta = true;
    console.log("Senha correta!");
  }
} while (!senhaCorreta);

// Saída:
// Tentativa 1: verificando senha...
// Tentativa 2: verificando senha...
// Tentativa 3: verificando senha...
// Senha correta!

// -------------------------------
// 3. CUIDADO COM LOOP INFINITO!
// -------------------------------
// Sempre garanta que a condição em `while` e `do...while` vai se tornar falsa em algum momento,
// caso contrário seu código travará!

// Exemplo perigoso (NÃO EXECUTAR!):
// while (true) {
//   console.log("Loop infinito");
// }
