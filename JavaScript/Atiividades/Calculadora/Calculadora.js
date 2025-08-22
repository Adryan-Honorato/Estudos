let conta = "";
let funcao = false;
const tela = document.getElementById("visor");

function valor(elemento) {
  
  let botao = document.getElementsByClassName("btn")[elemento];
  if (elemento === 16) {
    conta = eval(conta);
    tela.value = conta;
    funcao = true;
  } else if (elemento === 0) {
    tela.value = "";
    conta = "";
  } else if (funcao === true && !isNaN(botao.value)
  // compara se a função é igual a true  e se o valor do botão é um número
  ) {
    tela.value = botao.textContent || botao.innerHTML;
    // sobrescreve o que está no visor com o valor do botão que foi pressionado 
    conta = botao.value;
    // sobrescreve o que está na variavel conta com o valor do botão que foi pressionado 
    funcao = false;
    // Defini a função com false novamente, para não rodar esse bloco de código 
  } else {
    tela.value += botao.textContent || botao.innerHTML;
    conta += botao.value;
    funcao = false;
  }
}
