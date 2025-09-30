// Og'irlik M kilogramda berilgan. Undagi to'liq tonnalar sonini aniqlovchi programma tuzilsin.
// (1t=1000kg)

const prompt = require("prompt-sync")();

let m = Number(prompt("Butun son kiriting: "));
let t = 1000;
let result = Math.round(m / t);
console.log(result);
