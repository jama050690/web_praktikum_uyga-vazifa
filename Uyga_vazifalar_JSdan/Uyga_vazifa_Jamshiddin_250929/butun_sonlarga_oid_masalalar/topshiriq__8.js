// Ikki xonali son berilgan. Uning raqamlari o’rnini almashtirishdan hosil bo ‘lgan sonni aniqlovchi
// programma tuzilsin.

const prompt = require("prompt-sync")();

let a = Number(prompt("Butun son kiriting: "));

a = Math.abs(a);
let b = Math.floor(a / 10);
let c = Math.floor(a % 10);
let result = c * 10 + b;
console.log(result);
