// Closure é quando uma função interna acessa variáveis da função externa, 
// mantendo o escopo mesmo depois que a função externa já foi executada.

//Escopo Global 

function retornaFuncao(){
    // Escopo retorna funcao
    const nome = 'luiz'
   return function() {
    //escopo função anonima
 return nome;
    }
}


const funcao = retornaFuncao()
console.dir(funcao())