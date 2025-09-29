// Ikkita butun son beniigan. Shu sonlarning kattasini aniqiovchi programma tuzilsin.

const prompt = require("prompt-sync")();

let son1 = Number(prompt("Butun son kiriting: "));
let son2 = Number(prompt("Butun son kiriting: "));

if (son1 > son2) {
  console.log(son1);
} else {
  console.log(son2);
}
