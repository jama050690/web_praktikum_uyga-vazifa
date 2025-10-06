// A va B butun sonlar berilgan . Agar o’zgaruvchilar o’zaro teng bo’lmasa ,
//  A va B bu sonlarning kattasini o’zlashtirsin . Agar teng bo’lsa 0 ni o’zlashtirsin .
// A va B ning qiymati console ga chiqarilsin.

const prompt = require("prompt-sync")();

let a = Number("Butun son berilsin");
let b = Number("Butun son berilsin");
a = 3;
b = 42;

if (a > b) {
  b = a;
} else if (b > a) {
  a = b;
} else {
  (a = 0), (b = 0);
}
console.log(a, b);
