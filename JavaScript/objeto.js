// ==================================================
// JavaScript - Trabalhando com Objetos
// Explicações e exemplos comentados
// Fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_objects
// ==================================================


// --------------------------------------------------
// 1. Criando um Objeto Literal com Propriedades e Métodos
// --------------------------------------------------

const xicara = {
  nome: "Xícara",          // Nome do objeto
  cor: "Branca",           // Cor inicial
  capacidadeMl: 250,       // Capacidade em ml
  cheia: false,            // Indica se está cheia (booleano)
  liquido: "café",         // Tipo de líquido dentro

  // Método para encher a xícara
  encher() {
    this.cheia = true;
  },

  // Método para esvaziar a xícara
  esvaziar() {
    this.cheia = false;
  },

  // Método que imprime o status da xícara
  status() {
    const estado = this.cheia ? "cheia" : "vazia";
    console.log(`A ${this.nome} de cor ${this.cor} feita de ${this.material} está ${estado}.`);
  }
};

// Testando os métodos do objeto
xicara.material = "Porcelana";  // Adicionando propriedade dinamicamente
xicara.cor = "Azul";

xicara.status();    // A Xícara de cor Azul feita de Porcelana está vazia.
xicara.encher();
xicara.status();    // A Xícara de cor Azul feita de Porcelana está cheia.
xicara.esvaziar();
xicara.status();    // A Xícara de cor Azul feita de Porcelana está vazia.


// --------------------------------------------------
// 2. Criando Objetos com new Object()
// --------------------------------------------------

let meuCarro = new Object();

meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;

// Acessando propriedades com colchetes (útil para nomes dinâmicos)
meuCarro["fabricacao"] = "Ford";
meuCarro["modelo"] = "Mustang";
meuCarro["ano"] = 1969;


// --------------------------------------------------
// 3. Propriedades Dinâmicas e Chaves Não Convencionais
// --------------------------------------------------

var meuObj = new Object(),
  str = "minhaString",
  aleat = Math.random(),
  obj = new Object();

meuObj.tipo = "Sintaxe de ponto";
meuObj["data de criacao"] = "String com espaço";  // Chave com espaço precisa de colchetes
meuObj[str] = "valor de String";                  // Chave como variável string
meuObj[aleat] = "Número aleatório";               // Chave numérica
meuObj[obj] = "Objeto";                            // Chave objeto (convertida para string "[object Object]")
meuObj[""] = "Mesmo uma string vazia";

console.log(meuObj);


// --------------------------------------------------
// 4. Usando Variáveis para Definir Propriedades
// --------------------------------------------------

var nomeDaPropriedade = "fabricacao";
meuCarro[nomeDaPropriedade] = "Ford";

nomeDaPropriedade = "modelo";
meuCarro[nomeDaPropriedade] = "Mustang";


// --------------------------------------------------
// 5. Função para Mostrar Propriedades Próprias do Objeto
// --------------------------------------------------

function mostrarProps(obj, nomeDoObj) {
  var resultado = "";
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {   // Só mostra propriedades do próprio objeto, não herdadas
      resultado += nomeDoObj + "." + i + " = " + obj[i] + "\n";
    }
  }
  return resultado;
}


// --------------------------------------------------
// 6. Função para Listar Todas as Propriedades (Incluindo Herdadas)
// --------------------------------------------------

function listarTodasAsPropriedades(o) {
  var objectoASerInspecionado;
  var resultado = [];

  for (
    objectoASerInspecionado = o;
    objectoASerInspecionado !== null;
    objectoASerInspecionado = Object.getPrototypeOf(objectoASerInspecionado)
  ) {
    resultado = resultado.concat(
      Object.getOwnPropertyNames(objectoASerInspecionado),
    );
  }

  return resultado;
}


// --------------------------------------------------
// 7. Função Construtora - Criando Objetos com Mesma Estrutura
// --------------------------------------------------

function Carro(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}

var meucarro = new Carro("Eagle", "Talon TSi", 1993);

console.log(meucarro.marca);  // Eagle


// --------------------------------------------------
// 8. Objetos com Propriedades Aninhadas e Diferentes Tipos de Chave
// --------------------------------------------------

var minhaHonda = {
  cor: "vermelho",
  rodas: 4,
  motor: { cilindros: 4, tamanho: 2.2 },
};

var obj2 = {
  propriedade_1: "valor_1",   // Identificador válido
  2: "valor_2",               // Número como chave
  "propriedade n": "valor_n", // String com espaço
};


// --------------------------------------------------
// 9. Métodos Úteis para Inspecionar Objetos
// --------------------------------------------------

console.log(Object.keys(xicara));    // Retorna array com chaves enumeráveis
console.log(Object.values(xicara));  // Retorna array com valores das propriedades
console.log(Object.entries(xicara)); // Retorna array de pares [chave, valor]


// --------------------------------------------------
// 10. Resumo Importante sobre Objetos
// --------------------------------------------------
/*
- Objetos armazenam pares chave:valor, onde chave é string ou símbolo.
- Valores podem ser qualquer tipo, inclusive funções (métodos).
- Métodos acessam propriedades usando 'this'.
- Notação de ponto é mais comum, colchetes são úteis para chaves dinâmicas ou inválidas para ponto.
- Objetos podem ser criados com notação literal ({}) ou new Object().
- Propriedades e métodos podem ser adicionados, modificados e removidos dinamicamente.
- Funções construtoras (ou classes) permitem criar muitos objetos similares.
- Objetos têm protótipos, herdando propriedades/métodos.
- hasOwnProperty verifica se propriedade é própria do objeto (não herdada).
- Object.getPrototypeOf retorna o protótipo do objeto.
*/


// --------------------------------------------------
// 11. Testes Finais
// --------------------------------------------------

xicara.encher();
xicara.status();

console.log(mostrarProps(meucarro, "meucarro"));

console.log(listarTodasAsPropriedades(meucarro));
