//  Uch xonali son berilgan. Uning chapdan birinchi raqamini o’chirib o’ng tarafiga yozishdan
// hosil bo Igan sonni aniqlovchi programma tuzilsin.

const prompt = require("prompt-sync")();

let a = Number(prompt("Butun son kiriting: "));
a = Math.abs(a);

let d = Math.floor(a / 100);
let c = Math.floor((a % 100) / 10);
let b = Math.floor(a % 10);
let result = c * 100 + d * 10 + b;
console.log(result);
