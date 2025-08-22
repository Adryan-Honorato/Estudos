const perguntas = [
    {
        pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
        respostas: [
            "var myVar;",
            "let myVar;",
            "const myVar;"
        ],
        correta: 1 // A resposta correta é a opção 2 (let myVar;)
    },
    {
        pergunta: "Qual destes métodos é usado para encontrar o comprimento de uma string em JavaScript?",
        respostas: [
            "len()",
            "size()",
            "length()"
        ],
        correta: 2 // A resposta correta é a opção 3 (length())
    },
    {
        pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
        respostas: [
            "// This is a comment",
            "/* This is a comment */",
            "# This is a comment"
        ],
        correta: 0 // A resposta correta é a opção 1 (// This is a comment)
    },
    {
        pergunta: "Qual destes métodos é usado para converter uma string em minúsculas em JavaScript?",
        respostas: [
            "toLowerCase()",
            "toLower()",
            "lowerCase()"
        ],
        correta: 0 // A resposta correta é a opção 1 (toLowerCase())
    },
    {
        pergunta: "Qual símbolo é usado para concatenar strings em JavaScript?",
        respostas: [
            "&",
            "+",
            "-"
        ],
        correta: 1 // A resposta correta é a opção 2 (+)
    },
    {
        pergunta: "Qual destas declarações é usada para criar uma função em JavaScript?",
        respostas: [
            "function = myFunction()",
            "function myFunction()",
            "createFunction myFunction()"
        ],
        correta: 1 // A resposta correta é a opção 2 (function myFunction())
    },
    {
        pergunta: "Qual método JavaScript é usado para remover o primeiro elemento de um array?",
        respostas: [
            "removeFirst()",
            "pop()",
            "shift()"
        ],
        correta: 2 // A resposta correta é a opção 3 (shift())
    },
    {
        pergunta: "Qual destes é um operador de comparação em JavaScript?",
        respostas: [
            "<>",
            "==",
            "><"
        ],
        correta: 1 // A resposta correta é a opção 2 (==)
    },
    {
        pergunta: "Qual destas palavras-chave declara uma constante em JavaScript?",
        respostas: [
            "let",
            "var",
            "const"
        ],
        correta: 2 // A resposta correta é a opção 3 (const)
    },
    {
        pergunta: "Qual função JavaScript é usada para arredondar um número para o inteiro mais próximo?",
        respostas: [
            "round()",
            "ceil()",
            "floor()"
        ],
        correta: 0 // A resposta correta é a opção 1 (round())
    }
];
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

//loop ou laço de repetição
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}