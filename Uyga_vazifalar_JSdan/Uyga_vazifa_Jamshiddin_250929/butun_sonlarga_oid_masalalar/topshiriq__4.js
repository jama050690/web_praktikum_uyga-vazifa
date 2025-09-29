// A va B (A > B) musbat sonlari berilgan. A kesmada, B kesmani necha marta joylashtirish
// mumkinligini aniglovchi programma tuzilsin.

const prompt = require("prompt-sync")();

let a = Number(prompt("Butun son kiriting: "));
let b = Number(prompt("Butun son kiriting: "));
a > b;
let c = Math.floor(a / b);
console.log(c);
