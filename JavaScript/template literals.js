// =================================
// 🎯 Template Literals em JavaScript
// =================================

// Com aspas normais (forma tradicional)
const nome = "Lucas";
const idade = 30;
const frase1 = "Meu nome é " + nome + " e eu tenho " + idade + " anos.";
console.log(frase1); // Meu nome é Lucas e eu tenho 30 anos.

// -------------------------------
// Com template literals (forma moderna e limpa)
// Usa crase ` ` em vez de aspas
const frase2 = `Meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log(frase2); // Meu nome é Lucas e eu tenho 30 anos.

// -------------------------------
// Pode quebrar linhas sem usar \n
const textoMultilinha = `
Olá, meu nome é ${nome}.
Tenho ${idade} anos.
Esse texto está em múltiplas linhas!
`;
console.log(textoMultilinha);

// -------------------------------
// Também funciona com expressões
const a = 5;
const b = 3;
console.log(`A soma de ${a} + ${b} é igual a ${a + b}`); // A soma de 5 + 3 é igual a 8

// -------------------------------
// E até chamadas de função
function saudacao(nome) {
  return `Olá, ${nome}! Seja bem-vindo.`;
}

console.log(saudacao("Adryan")); // Olá, Adryan! Seja bem-vindo.

// -------------------------------
// Dentro de objetos e métodos
const produto = "Camiseta";
const preco = 49.9;

const mensagem = {
  resumo: `O produto ${produto} custa R$ ${preco.toFixed(2)}`
};

console.log(mensagem.resumo); // O produto Camiseta custa R$ 49.90
