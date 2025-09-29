// A va B butun sonlar berilgan. Agar o'zgaruvchilar o'zaro teng bo'lmasa, A va B bu sonlarning
// kattasini o'zlashtirsin. Agar teng bo'lsa, 0 ni o'ziashtirsin. A va B ning qiymati ekranga chigarilsin.

const prompt = require("prompt-sync")();

let a = Number(prompt("Butun son kiriting: "));
let b = Number(prompt("Butun son kiriting: "));
if (a > b) {
  b = a;
} else if (b > a) {
  a = b;
} else {
  (a = 0), (b = 0);
}
console.log(a, b);
