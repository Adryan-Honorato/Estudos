

// A declaração throw lança uma exceção definida pelo usuário. A execução da função atual vai parar (as instruções após o throw não serão executadas), e o controle será passado para o primeiro bloco catch na pilha de chamadas. Se nenhum bloco catch existe entre as funções "chamadoras", o programa vai terminar.

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error("X e Y Precisam ser número");
    };


    return x + y
}


// Try e Catch para tratamento de erro, o try é tentar, normalmente você coloca um bloco de código que pode acarretar em erro dentro do try, o catch recebe esse erro, e retorna o bloco de código que estiver dentro dele, não é recomendado voltar o erro direto para o usuário por questão de segurança 

try {
    // essa parte do código é executada quando não a erros 
    console.log(soma(120, 40))
    console.log(soma(1, 2))
} catch (err) {
    // essa parte do código é executada quando a erros 
    console.log(err)
} finally {
    console.log("to sempre aqui")
}

// Finally é um trecho de código que é executado idependente do erro 


function retornaHora(data) {
    // verifica se a função recebeu a data, e checa se ela faz parte de uma instancia de data, ou seja se ela faz parte do objeto data 
    if (data && !(data instanceof Date)) {
        throw new TypeError("Esperando instância data")
    }


    if (!data) {
        data = new Date();

    }


    // toLocaleTimeString retorna uma string com uma representação sensível ao idioma, hour, minute e second são propriedades do objeto de configuração o toLocaleTimeString 
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',

    });
}


const meuAniversario = new Date('05-18-2003 12:50:12')
const hora = retornaHora(meuAniversario)
console.log(hora)