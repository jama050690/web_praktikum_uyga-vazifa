// Uch xonali son berilgan. Uning ragamiar yig indisini aniqlovchi programma tuzilsin.

const prompt = require("prompt-sync")();

let a = Number(prompt("Butun son kiriting: "));
a = Math.abs(a);

let b = Math.floor(a % 10);
let c = Math.floor((a % 100) / 10);
let d = Math.floor(a / 100);
let result = b + c + d;
console.log(result);
