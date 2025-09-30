const numeros = [1,2,3,4,5,6];

for(numero of numeros){
    if(numero === 2){
        continue;
    };
// O Continue pula para próxima ieteração do lanço, nesse exemplo ele pula o elemento 2


    if( numero === 4){
        break;
    };

//O Break serve para quebrar o lanço assim que chega o valor passado para nosso if, no exemplo assim que ele acha o 4, ele quebra o if 

    console.log(numero);
};

// funciona em ambos os for, mas o if não pode ser o ternário 


// Cuidado quando utilizar o continue ou o Break no loop while , a váriavel de controle, tem que ser sempre atualizada antes dos dois comandos para evitar loop infinito 
let i = 0
while( i < numeros.length){
    let numero = numeros[i]

    if(numero === 2){
        i++
        continue;
    }


      if(numero === 7){
        i++
        break;
    }
console.log(numero)
i++
}