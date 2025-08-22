// Cria um array chamado 'sintaxeArray1' usando colchetes []
let sintaxeArray1 = ['Assim', 'Defimos', 'um', 'array', 'só', 'com', 'o' ,'[]']

// Exibe no console o item na posição 7 do array (lembrando que começa em 0)
console.log(sintaxeArray1[7]) // Resultado: '[]'

// Adiciona uma propriedade chamada 'chaves' no array (arrays são objetos no JS)
sintaxeArray1["chaves"] = "teste"

// Cria um array chamado 'sintaxeArray2' com 5 posições vazias
let sintaxeArray2 = Array(5)

// Tenta acessar o índice 4, que não existe (índices vão de 0 a 4), retorna undefined
console.log(sintaxeArray2[4])

// Cria um array chamado 'sintaxeArray3' utilizando a função Array() com valores
let sintaxeArray3 = Array('Assim', 'definimos', 'um', 'array')

// Exibe no console o item na posição 2 do array (que é 'um')
console.log(sintaxeArray3[2])

// Acessa e exibe no console a propriedade 'chaves' que foi adicionada no sintaxeArray1
console.log(sintaxeArray1.chaves) // Resultado: 'teste'

// Cria um objeto chamado 'promessa' com propriedades
var promessa = {
  var: "texto",       // propriedade 'var' com valor string
  array: [1, 2, 3, 4] // propriedade 'array' com um array de números
};

// Exibe no console o valor da propriedade 'var' do objeto promessa
console.log(promessa["var"]);

// ------------------------------------------------------------
// metodosArray.js - Exemplos de métodos de array com comentários
// ------------------------------------------------------------

// Array base para os exemplos
const frutas = ["maçã", "banana", "laranja", "uva", "melancia"];

// 1. push() - adiciona um elemento ao final do array
frutas.push("abacaxi"); 
console.log("push:", frutas);

// 2. pop() - remove o último elemento do array e retorna ele
const removido = frutas.pop();
console.log("pop:", removido, frutas);

// 3. unshift() - adiciona um elemento no início do array
frutas.unshift("morango");
console.log("unshift:", frutas);

// 4. shift() - remove o primeiro elemento do array e retorna ele
const removidoInicio = frutas.shift();
console.log("shift:", removidoInicio, frutas);

// 5. indexOf() - retorna o índice da primeira ocorrência do elemento
const indiceBanana = frutas.indexOf("banana");
console.log("indexOf banana:", indiceBanana);

// 6. lastIndexOf() - retorna o índice da última ocorrência do elemento
frutas.push("banana"); // adiciona outra "banana" no final
const ultimoIndiceBanana = frutas.lastIndexOf("banana");
console.log("lastIndexOf banana:", ultimoIndiceBanana);

// 7. includes() - verifica se o array contém determinado elemento (true/false)
const temUva = frutas.includes("uva");
console.log("includes uva:", temUva);

// 8. join() - junta os elementos do array em uma string, separados por um separador
const stringFrutas = frutas.join(", ");
console.log("join:", stringFrutas);

// 9. slice() - retorna um novo array com parte dos elementos (não altera o original)
const algumasFrutas = frutas.slice(1, 4); // pega do índice 1 até antes do 4
console.log("slice(1,4):", algumasFrutas);

// 10. splice() - remove ou substitui elementos no array original
// remover 1 elemento na posição 2
const removidosSplice = frutas.splice(2, 1);
console.log("splice remove:", removidosSplice, frutas);

// adicionar elementos na posição 2, sem remover nenhum
frutas.splice(2, 0, "kiwi", "mamão");
console.log("splice add:", frutas);

// 11. forEach() - executa uma função para cada elemento do array (não retorna nada)
console.log("forEach:");
frutas.forEach((fruta, i) => {
  console.log(`  Índice ${i}: ${fruta}`);
});

// 12. map() - cria um novo array modificando cada elemento
const frutasMaiusculas = frutas.map(f => f.toUpperCase());
console.log("map maiusculas:", frutasMaiusculas);

// 13. filter() - cria um novo array com elementos que passam em um teste
const frutasComA = frutas.filter(f => f.includes("a"));
console.log("filter com 'a':", frutasComA);

// 14. reduce() - reduz o array a um único valor, acumulando resultados
const frase = frutas.reduce((acum, f) => acum + f + " ", "");
console.log("reduce concat:", frase.trim());

// 15. find() - retorna o primeiro elemento que passar no teste
const frutaComLetraK = frutas.find(f => f.startsWith("k"));
console.log("find fruta com k:", frutaComLetraK);

// 16. findIndex() - retorna o índice do primeiro elemento que passar no teste
const indiceFrutaComM = frutas.findIndex(f => f.startsWith("m"));
console.log("findIndex fruta com m:", indiceFrutaComM);

// 17. some() - verifica se algum elemento passa no teste (true/false)
const temFrutaComZ = frutas.some(f => f.includes("z"));
console.log("some fruta com z:", temFrutaComZ);

// 18. every() - verifica se todos os elementos passam no teste (true/false)
const todasComA = frutas.every(f => f.includes("a"));
console.log("every todas com 'a':", todasComA);

// 19. reverse() - inverte a ordem dos elementos do array (altera o array original)
frutas.reverse();
console.log("reverse:", frutas);

// 20. sort() - ordena os elementos do array em ordem alfabética (altera o array original)
frutas.sort();
console.log("sort:", frutas);

// 21. Array.isArray() - verifica se um objeto é um array (retorna true ou false)
console.log("isArray frutas:", Array.isArray(frutas));

// 22. concat() - concatena arrays sem modificar os originais, criando um novo array
const maisFrutas = frutas.concat(["pêssego", "caju"]);
console.log("concat:", maisFrutas);

// 23. flat() - "achata" arrays aninhados (exemplo com profundidade 1)
const numerosAninhados = [1, 2, [3, 4], [5, [6, 7]]];
console.log("flat 1:", numerosAninhados.flat()); // profundidade padrão 1
console.log("flat 2:", numerosAninhados.flat(2)); // achata até profundidade 2

// 24. fill() - preenche os elementos do array com um valor
const arrayPreenchido = new Array(5).fill(0);
console.log("fill:", arrayPreenchido);

// 25. from() - cria um array a partir de um objeto iterável (como string)
const arrayFromString = Array.from("Hello");
console.log("from string:", arrayFromString);

// 26. keys() - retorna um iterador com as chaves (índices) do array
console.log("keys:");
for (const key of frutas.keys()) {
  console.log(key);
}

// 27. values() - retorna um iterador com os valores do array
console.log("values:");
for (const value of frutas.values()) {
  console.log(value);
}

// 28. entries() - retorna um iterador com pares [índice, valor]
console.log("entries:");
for (const [index, value] of frutas.entries()) {
  console.log(index, value);
}
