
// ======= export.js =======
// Este arquivo exporta variáveis e funções usando exportação nomeada e padrão

// Exportação nomeada
export const PI = 3.14159;
export function soma(a, b) {
  return a + b;
}
export const mensagem = "Bem-vindo aos módulos!";

// Exportação default (só pode haver uma por arquivo)
export default function saudacao() {
  console.log("Olá! Esta é uma saudação padrão.");
}
