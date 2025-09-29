// Ikki xonali son berilgan. Oldin uning o’nliklar xonasidagi ragamni, so’ng birlar xonasidagi
// raqamni chigaruvchi programma tuzilsin.

const prompt = require("prompt-sync")();

let a = Number(prompt("Butun son kiriting: "));

let b = Math.floor(a / 10);
let c = Math.floor(a % 10);
console.log(b, c);
