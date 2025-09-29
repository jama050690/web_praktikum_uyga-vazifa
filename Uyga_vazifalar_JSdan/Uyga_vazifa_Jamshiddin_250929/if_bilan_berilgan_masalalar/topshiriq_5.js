// Uchta butun son berligan. Shu sonlar orasidan nechta musbat va manfiy son borligini aniqiovchi
// programma tuzilsin.

const prompt = require("prompt-sync")();

let son1 = Number(prompt("Butun son kiriting: "));
let son2 = Number(prompt("Butun son kiriting: "));
let son3 = Number(prompt("Butun son kiriting: "));
let resultNegative = 0;
let resultPositive = 0;
if (son1 > 0) {
  resultPositive++;
} else {
  resultNegative++;
}

if (son2 > 0) {
  resultPositive++;
} else {
  resultNegative++;
}
if (son3 > 0) {
  resultPositive++;
} else {
  resultNegative++;
}

console.log("Musbat sonlar:", resultPositive, " ta");
console.log("Manfiy sonlar:", resultNegative, " ta");
