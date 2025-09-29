//  Ikki xonali son berilgan. Uning raqamlari yig indisini aniqlovchi programma tuzilsin.

const prompt = require("prompt-sync")();

let a = Number(prompt("Butun son kiriting: "));
a = Math.abs(a);
let b = Math.round(a / 10);
let c = Math.round(a % 10);
let result = b + c;
console.log(result);
