const fs = require('fs');

const caminho = 'G:/Meu Drive/Estudos/JavaScript/superhero.json';

fs.readFile(caminho, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }
  const superHero = JSON.parse(data);
  console.log(superHero.members[0].name);
});

