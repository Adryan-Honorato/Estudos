// ---------------------
// EXEMPLO DE SPREAD
// ---------------------

// Spread em arrays: espalha os valores de um array dentro de outro
const numeros = [1, 2, 3];
const novosNumeros = [...numeros, 4, 5]; // Copia os elementos de 'numeros' e adiciona 4 e 5
console.log("Spread em array:", novosNumeros); // [1, 2, 3, 4, 5]

// Spread em objetos: copia propriedades de um objeto para outro
const usuario = { nome: "Ana", idade: 25 };
const usuarioAtualizado = { ...usuario, cidade: "São Paulo" }; // Copia tudo e adiciona nova chave
console.log("Spread em objeto:", usuarioAtualizado);
// { nome: "Ana", idade: 25, cidade: "São Paulo" }


// ---------------------
// EXEMPLO DE REST
// ---------------------

// Rest em arrays (desestruturação): coleta o "resto" dos valores
const [primeiro, segundo, ...restoDosNumeros] = [10, 20, 30, 40, 50];
console.log("Primeiro:", primeiro); // 10
console.log("Segundo:", segundo);   // 20
console.log("Resto:", restoDosNumeros); // [30, 40, 50]

// Rest em objetos (desestruturação): agrupa o resto das propriedades
const { nome, ...dadosRestantes } = { nome: "Carlos", idade: 30, cidade: "BH" };
console.log("Nome:", nome); // "Carlos"
console.log("Dados restantes:", dadosRestantes); // { idade: 30, cidade: "BH" }

// Rest em parâmetros de função: aceita vários argumentos como um array
function somarTudo(...numeros) {
  // 'numeros' será um array com todos os argumentos passados
  return numeros.reduce((total, num) => total + num, 0);
}

console.log("Soma total:", somarTudo(1, 2, 3, 4)); // 10
