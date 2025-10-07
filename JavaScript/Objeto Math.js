// ===============================
// Demonstração do objeto Math em JavaScript
// ===============================

// O objeto Math é um objeto embutido que fornece
// constantes matemáticas (propriedades) e funções (métodos).
// Ele NÃO é um construtor, ou seja, não se usa "new Math()".

// -------------------------------
// PROPRIEDADES DO MATH
// -------------------------------
console.log("=== PROPRIEDADES DO MATH ===");

console.log("PI:", Math.PI);       // Valor de π (3.141592653589793)
console.log("E:", Math.E);         // Número de Euler (~2.718)
console.log("LN2:", Math.LN2);     // Logaritmo natural de 2
console.log("SQRT2:", Math.SQRT2); // Raiz quadrada de 2

// -------------------------------
// MÉTODOS DO MATH
// -------------------------------
console.log("\n=== MÉTODOS DO MATH ===");

// Valor absoluto (tira o sinal do número)
console.log("Math.abs(-10):", Math.abs(-10)); // 10

// Arredondamentos
console.log("Math.round(4.6):", Math.round(4.6)); // 5 (arredonda normal)
console.log("Math.floor(4.9):", Math.floor(4.9)); // 4 (sempre para baixo)
console.log("Math.ceil(4.1):", Math.ceil(4.1));   // 5 (sempre para cima)

// Potenciação e raiz
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 8 (2³)
console.log("Math.sqrt(16):", Math.sqrt(16));   // 4 (raiz quadrada)

// Números aleatórios
console.log("Math.random():", Math.random());
// Gera número entre 0 e 1 (pseudoaleatório)
// Exemplo: gerar um número inteiro entre 1 e 10
console.log("Número aleatório entre 1 e 10:", Math.floor(Math.random() * 10) + 1);

// Máximo e mínimo
console.log("Math.max(2, 10, 7):", Math.max(2, 10, 7)); // 10
console.log("Math.min(2, 10, 7):", Math.min(2, 10, 7)); // 2

// Trigonometria (exemplo básico)
console.log("Math.sin(Math.PI / 2):", Math.sin(Math.PI / 2)); // 1
console.log("Math.cos(Math.PI):", Math.cos(Math.PI));         // -1

// -------------------------------
// CONCLUSÃO
// -------------------------------
// O objeto Math é usado para cálculos matemáticos
// comuns (arredondamento, potência, raiz, trigonometria)
// e também para gerar números aleatórios.
// Ele é um objeto estático, usado diretamente sem instanciar.
