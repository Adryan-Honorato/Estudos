// -------------------------------
// 1. FOR CLÁSSICO
// -------------------------------
// Usado quando você sabe exatamente quantas vezes quer repetir algo.
// Muito útil para percorrer arrays com índice.

const numeros = [10, 20, 30, 40, 50];

for (let i = 0; i < numeros.length; i++) {
  console.log(`FOR clássico - índice ${i}: valor = ${numeros[i]}`);
}
// Saída:
// FOR clássico - índice 0: valor = 10
// FOR clássico - índice 1: valor = 20
// ...

// -------------------------------
// 2. FOR...OF
// -------------------------------
// Usado para percorrer elementos diretamente em estruturas iteráveis (como arrays, strings, etc).
// Aqui você acessa os valores, não os índices.

for (const numero of numeros) {
  console.log(`FOR...OF - valor = ${numero}`);
}
// Saída:
// FOR...OF - valor = 10
// FOR...OF - valor = 20
// ...

// Também funciona com strings
const palavra = "chat";

for (const letra of palavra) {
  console.log(`Letra: ${letra}`);
}
// Saída:
// Letra: c
// Letra: h
// ...

// -------------------------------
// 3. FOR...IN
// -------------------------------
// Usado para percorrer as chaves (índices no caso de array ou propriedades no caso de objeto).
// Ideal para objetos.

const pessoa = {
  nome: "Adryan",
  idade: 22,
  profissao: "Técnico em Informática"
};

for (const chave in pessoa) {
  console.log(`FOR...IN - chave = ${chave}, valor = ${pessoa[chave]}`);
}
// Saída:
// FOR...IN - chave = nome, valor = Adryan
// FOR...IN - chave = idade, valor = 22
// ...

// Também pode ser usado com arrays, mas é menos recomendado:
for (const indice in numeros) {
  console.log(`FOR...IN em array - índice = ${indice}, valor = ${numeros[indice]}`);
}
// Saída semelhante ao for clássico, mas usando string como índice.
