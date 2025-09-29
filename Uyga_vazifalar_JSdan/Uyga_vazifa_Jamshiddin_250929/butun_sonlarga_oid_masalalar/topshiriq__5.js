// A va B (A > B) musbat sonlar berilgan. A kesmada B kesmani necha marta joylashtirish
// mumkin. A kesmada B kesmaning joylashmagan qismini aniqlovchi programma tuzilsin.

const prompt = require("prompt-sync")();

let a = Number(prompt("Butun son kiriting: "));
let b = Number(prompt("Butun son kiriting: "));
a > b;
let result = Math.floor(a / b);
let result1 = Math.floor(a % b);
console.log(result, result1);
