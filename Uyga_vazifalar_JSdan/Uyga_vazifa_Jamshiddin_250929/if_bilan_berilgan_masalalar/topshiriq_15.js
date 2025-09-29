//  Uchta son berilgan. Shu sonlarning yig'indisi eng katta bo'ladigan ikkitasini ekranga chiqaruvchi
// programma tuzilsin.

const prompt = require("prompt-sync")();

let a = Number(prompt("Butun son kiriting: "));
let b = Number(prompt("Butun son kiriting: "));
let c = Number(prompt("Butun son kiriting: "));

if (a > b && a < c) {
  console.log(b + c);
} else if (b > a && c > b) {
  console.log(a + c);
} else console.log(a + b);
