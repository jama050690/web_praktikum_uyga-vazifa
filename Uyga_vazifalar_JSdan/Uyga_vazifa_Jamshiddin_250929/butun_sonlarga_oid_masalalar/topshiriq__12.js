//  Uch xonali son berilgan. Uning raqamlarini teskari tartibda yozishdan hosil bo'lgan sonni
// aniglovchi program tuzilsin.

const prompt = require("prompt-sync")();

let a = Number(prompt("Butun son kiriting: "));
a = Math.abs(a);

let b = Math.floor(a % 10);
let c = Math.floor((a % 100) / 10);
let d = Math.floor(a / 100);
let result = b * 100 + c * 10 + d;
console.log(result);
