//  Uchia son beriigan. Shu sonlarni kichigini aniqiovchi programma tuzilsin.
const prompt = require("prompt-sync")();

let a = Number(prompt("Butun son kiriting: "));
let b = Number(prompt("Butun son kiriting: "));
let c = Number(prompt("Butun son kiriting: "));

if (a < b && a < c) {
  console.log(a);
} else if (b < a && b < c) {
  console.log(b);
} else {
  console.log(c);
}
