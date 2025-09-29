// A va B butun sonlar berilgan. Agar o'zgaruvchilar o'zaro teng bo’masa, A va B o'zgaruvchilar
// ulaming yig indisini o'zlashtirsin. Agar teng bo'lsa, 0 ni ozlashtirsin. A va B ning 1iymat ekranga
// chigarilsin.
const prompt = require("prompt-sync")();

let a = Number(prompt("Butun son kiriting: "));
let b = Number(prompt("Butun son kiriting: "));
if (a > b) {
  console.log(a + b);
} else if (b > a) {
  console.log(b + a);
} else {
  console.log((a = 0), (b = 0));
}
