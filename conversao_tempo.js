const input = require('fs').readFileSync('stdin.txt', 'utf8'); 
const lines = input.split('/n');

var segundos = Number.parseInt(lines[0]);

// segundos para horas = segundos / 3600
// segundos para minutos = segundos / 60
// segundos restantes = (segundos/60) % 60

console.log(`${Math.trunc(segundos / 3600}:${Math.trunc((segundos / 60) % 60)}:${segundos % 60}`);
// input: 556
// output: 0:9:16
