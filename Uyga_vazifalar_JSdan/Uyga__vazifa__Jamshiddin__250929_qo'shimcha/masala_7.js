// Butun son berilgan .Agar berilgan son musbat bolsa 1 ga oshirilsin aks holda
// o’zgartirilmasin. Natija console ga chiqarilsin.

const prompt = require("prompt-sync")();

let son = Number("Butun son berilsin");
son = -12;

if (son > 0) {
  console.log(++son);
} else {
  console.log(son);
}
