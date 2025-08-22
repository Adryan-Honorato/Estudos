// ===============================
// 🎯 Desestruturação de Objetos
// ===============================

// Objeto com informações de uma pessoa
const pessoa = { nome: "Ana", idade: 25 };

// Desestruturação: extrai 'nome' e 'idade' diretamente do objeto
const { nome, idade } = pessoa;

console.log(nome);  // "Ana"
console.log(idade); // 25

// -------------------------------
// Usando valores padrão
const { cidade = "Desconhecida" } = pessoa;

console.log(cidade); // "Desconhecida" (pois 'cidade' não existe em 'pessoa')

// -------------------------------
// Renomeando variáveis
const usuario = { id: 1, nome: "João" };

// 'nome' é extraído, mas renomeado para 'nomeUsuario'
const { nome: nomeUsuario } = usuario;

console.log(nomeUsuario); // "João"

// =============================
// 🎯 Desestruturação de Arrays
// =============================

const numeros = [10, 20, 30];

// Desestrutura os dois primeiros valores do array
const [a, b] = numeros;

console.log(a); // 10
console.log(b); // 20

// -------------------------------
// Pulando valores com vírgulas
const [x, , z] = [1, 2, 3];

console.log(x); // 1
console.log(z); // 3

// -------------------------------
// Usando o operador rest (...)
// Captura o restante dos valores do array
const [primeiro, ...resto] = [1, 2, 3, 4];

console.log(primeiro); // 1
console.log(resto);    // [2, 3, 4]

// =====================================
// 🎯 Desestruturação como parâmetro de função
// =====================================

function mostrarInfo({ nome, idade }) {
  // A função já recebe os dados desestruturados
  console.log(`${nome} tem ${idade} anos`);
}

const pessoa2 = { nome: "Carlos", idade: 30 };
mostrarInfo(pessoa2); // Carlos tem 30 anos
