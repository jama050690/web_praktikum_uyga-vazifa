// Uch xonali son berilgan. Oldin uni birliklar xonasidagi ragamni so’ng o'nliklar xonasidagi
// raqamni chigaruvchi programma tuzilsin.

const prompt = require("prompt-sync")();

let a = Number(prompt("Butun son kiriting: "));
a = Math.abs(a);

let b = Math.floor(a % 10);
let c = Math.floor((a % 100) / 10);
console.log(b, c);
