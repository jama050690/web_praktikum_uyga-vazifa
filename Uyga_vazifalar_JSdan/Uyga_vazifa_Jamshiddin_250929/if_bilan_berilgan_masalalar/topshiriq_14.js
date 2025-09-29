// Uchta son berilgan. Shu sonlarni avval kichigini keyin kattasini ekranga chigaruvchi programma
// tuzilsin.
const prompt = require("prompt-sync")();

let a = Number(prompt("Butun son kiriting: "));
let b = Number(prompt("Butun son kiriting: "));
let c = Number(prompt("Butun son kiriting: "));
let min;
let max;
if (a < b && a < c) {
  min = a;
} else if (b < a && b < c) {
  min = b;
} else {
  min = c;
}

if (a > b && a > c) {
  max = a;
} else if (b > a && b > c) {
  max = b;
} else {
  max = c;
}
console.log(max, min);
