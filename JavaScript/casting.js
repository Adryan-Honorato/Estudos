
      // Casting (ou type casting) é o processo de converter um valor de um tipo de dado para outro tipo. 
      // Isso é muito comum em programação quando você precisa que um dado seja tratado como outro tipo para poder executar alguma operação.

      // Solicita ao usuário que digite sua idade (entrada como string)
      var idade = prompt('Digite sua idade');

      // Solicita ao usuário que digite sua nota (entrada como string)
      var nota = prompt('Digite sua nota');

      // Converte a idade para um número inteiro (casting de string para inteiro)
      idade = parseInt(idade);

      // Converte a nota para um número com casas decimais (casting de string para float)
      nota = parseFloat(nota);

      // Exibe a nota no console (número com decimal)
      console.log(nota);

      // Aqui está vazio, poderia ser console.log(idade) para também mostrar a idade
      console.log(idade);

