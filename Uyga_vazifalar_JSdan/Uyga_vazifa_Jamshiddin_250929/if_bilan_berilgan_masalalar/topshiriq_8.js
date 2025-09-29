// Ikkita butun son beriigan. Shu sonlarning avval kattasini keyin kichigini ekranga chiqaruvchi
// programma tuzilsin.

const prompt = require("prompt-sync")();

let son1 = Number(prompt("Butun son kiriting: "));
let son2 = Number(prompt("Butun son kiriting: "));
if (son1 > son2) {
  console.log(son1, son2);
} else {
  console.log(son2, son1);
}
