import promptSync from "prompt-sync";
import { arToqson } from "./masala_1_array.js";
import { arDarajason } from "./masala_2_array.js";
import { arrArifmetik } from "./masala_3_array.js";
import arrFibanaci from "./masala_4_array.js";
import arrTeskari from "./masala_5_array.js";

const prompt = promptSync();

let n = Number(prompt("Masala 1. Natural son kiriting: "));
let toq = arToqson(n);
console.log(`${n} ta toq sonlar:`, toq);

n = Number(prompt("Masala 2. Natural son kiriting n: "));
console.log(`${n} ta 2 ning darajalari:`, arDarajason(n));

n = Number(prompt("Masala 3. Natural son kiriting n: "));
let A = Number(prompt("A hadini kiriting: "));
let D = Number(prompt("D ayirmani kiriting: "));
console.log(arrArifmetik(n, A, D));

n = Number(prompt("Masala 4. Natural son kiriting: "));
console.log(`${n} ta Fibonachchi sonlari:`, arrFibanaci(n));

let N4 = Number(prompt(" Masala 5. Massiv uzunligini kiriting: "));
let array = [];
for (let i = 0; i < N4; i++) {
  array.push(Number(prompt(`${i + 1}-elementni kiriting: `)));
}
console.log("Asl massiv:", array);
console.log("Teskari tartibdagi massiv:", arrTeskari([...array]));
