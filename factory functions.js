// factory funcitions(Funções Fábrica) elas são funções que criam objetos // elas são uma fábrica de objetos, ou seja, ela retorna um objeto
// a factory function é uma função que retorna um objeto
// ela é útil para criar vários objetos com as mesmas propriedades
// mas com valores diferentes
// exemplo:
function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,
        peso,
        altura,
        //Getter
        get imc() {//Get transforma a função em um atributo do objeto
            const indice = this.peso / (this.altura ** 2)//Expressão que calcula o imc peso dividido pela altura ao quadrado
            return indice.toFixed(2) //ToFixed  limita as casas decimais para 2


        },
        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift() //shift remove o primeiro elemento de um array e o retorna.
            this.sobrenome = valor.join(' ')// junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string o " " separa com espaço.
        },


        get fala() {//Funcitons dentro de objetos são chamados de métodos
            return `Olá me chamo ${this.nome} ${this.sobrenome} e tenho ${this.imc} de imc, estou saudável
            `
            //o this se refere ao objeto que está chamando a função,  o this sempre será quem chamar o objeto 
            //no caso o objeto pessoa1 ou pessoa2 que estão chamando a função fala

        },


    }
}

const pessoa1 = criaPessoa('Adryan', 'Honorato', 75, 1.68)
pessoa1.nomeCompleto = "Louise Boaventura Tavares de Brito"
const pessoa2 = criaPessoa('Maria', 'Silva', 30)

console.log(pessoa1.fala)