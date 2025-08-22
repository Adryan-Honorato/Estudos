
// ======= import.js =======
// Este arquivo importa os elementos exportados do arquivo export.js

// Importando exportações nomeadas (usa chaves)
import { PI, soma, mensagem } from './export.js';

console.log("Valor de PI:", PI);
console.log("Soma de 5 + 3 =", soma(5, 3));
console.log("Mensagem:", mensagem);

// Importando a exportação default (sem chaves)
import saudacao from './export.js';
saudacao();

// Também seria possível importar tudo usando *
// import * as utils from './export.js';
// console.log(utils.PI);
// utils.saudacao();
