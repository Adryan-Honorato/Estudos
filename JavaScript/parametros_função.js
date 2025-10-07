function funcao() {
    let total = 0
    for (let argumentos of arguments) {
        // "arguments" é um objeto especial disponível em funções do JavaScript,
        // que contém todos os argumentos passados, mesmo que não tenham sido declarados
        // nos parâmetros da função, mas é bom lembrar que o arguments sustenta todos os argumentos enviados
        // mas só para função definidas pelo function, arrow function não tem arguments

        total += argumentos
    }
    console.log(total)
}

funcao(1, 2, 3, 4, 5, 6, 7)//Esses são os argumentos enviados para a função 

// Observação: em muitas outras linguagens, passar argumentos sem parâmetros definidos
// pode gerar erro, mas no JavaScript isso é permitido graças ao objeto "arguments".

//Para evitar erros, podemos definir o valor do argumento direto no parâmetro 
function funcao2(a = 0
    , b = 0, c = 0) {
    console.log(a + b + c)
}

// caso eu passe outro argumento para o parâmetro "a", o valor padrão será substituído
funcao2(2, undefined, 20)//Como eu quero que o valor de "b" seja o padrão, posso deixar como "undefined", tem que ser "undefined", se for 'null', ele vai virar zero 


function funcao3({ nome, sobrenome, idade }) {
    console.log("Oii, me chamo " + nome + " " + sobrenome + " tenho " + idade + " Anos")
}

const pessoa1 = {
    nome: "Adryan",
    sobrenome: "Honorato",
    idade: 17

}

funcao3(pessoa1)
// Nesse exemplo estamos fazendo desustruração de um objeto via parâmetro

function conta(operador, acumulador, ...numeros) {//o operador ..., é o operador reast ele pega o resto dos argumentos e coloca em um array

    for (let numero of numeros) {
        if (operador === "+") { acumulador += numero }
        if (operador === "-") { acumulador -= numero }
        if (operador === "x") {
            acumulador *=
            numero
        }
        if (operador === "/") {
            acumulador /=
            numero
        }

    }
    console.log(acumulador)

}

conta('+', 0, 20, 30, 40, 50)

