// const tresHoras = 60 * 60 * 3 * 1000; // 60 segundos, vezes 60 minutos, vezes 3 horas e vezes 1 milissegundo 
// const umDia = 60 * 60 * 24 * 1000 // 60 segundos, vezes 60 minutos, vezes 24 horas e vezes 1 milissegundo 
// const data = new Date(0 + tresHoras + umDia); //01/01/1970 Timestamp unix ou época unix

const data = new Date(); // Cria um data deste exato momento
console.log(data.toString());
console.log('Dia', data.getDate()); //Pega o dia do mês
console.log('Mês', data.getMonth() + 1); // Mês começa do 0, por isso soma 1 para ficar correto
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Milissegundo', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); //Pega o dia equivalente o dia da semana, começando do 0, Domingo 0, Segunda 1, Terça 2, Quarta 3, Quinta 4, Sexta 5, Sábado 6.
