function Returnsoma(a, b) {
    return a + b
}


let teste = Returnsoma(2, 3)
console.log(teste)

// Return está retornando o valor de a + b, que está sendo designado para uma váriavel, 
//console log é diferente de return, ele exibi o valor nosso console, mas não podemos reutilizar o valor caso precise

function Multiplica(x){
    return function(n){
        return n * x
    }
}
const duplica = Multiplica(2)
const triplica = Multiplica(3)
const quadriplica = Multiplica(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))

//como pode ver no exemplo podemos retornar função, dentro de outra função 