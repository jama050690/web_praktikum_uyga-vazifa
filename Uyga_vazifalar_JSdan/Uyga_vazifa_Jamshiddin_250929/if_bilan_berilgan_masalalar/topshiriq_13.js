// Uchta son beriigan. Shu sonlarni o’ratachasi (ya'ni katta va kichik sonlar orasidagi son) ni
// aniglovchi programma tuzilsin.

const prompt = require("prompt-sync")();

let a = Number(prompt("Butun son kiriting: "));
let b = Number(prompt("Butun son kiriting: "));
let c = Number(prompt("Butun son kiriting: "));

if (a > b && a < c) {
  console.log(a);
} else if (b > a && c > b) {
  console.log(b);
} else console.log(c);
