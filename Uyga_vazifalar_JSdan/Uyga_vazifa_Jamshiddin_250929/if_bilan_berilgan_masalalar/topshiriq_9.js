// A va B haqiqiy sonlan berilgan. Shu sonlarni shunday o'zgartirish kerakki, A son kichik B son katta
// bo'lsin. A va B ning qiymati ekranga chiqarilsin.

const prompt = require("prompt-sync")();

let a = Number(prompt("Haqiqiy son kiriting: "));
let b = Number(prompt("Haqiqiy son kiriting: "));

if (a > b) {
  a = b - a;
}
console.log("Sonlar qiymati, a: ", a, ", b: ", b);
