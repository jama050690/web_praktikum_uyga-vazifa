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

let n1 = Number(prompt("Masala 2.\n Natural son kiriting: "));
let n2 = Number(prompt("n: "));
console.log(`${n1} ta 2 ning darajalari:`, arDarajason(n1));

let A = Number(prompt("Masala 3.\n A: "));
let D = Number(prompt("D: "));
console.log(arrArifmetik(n2, A, D));

let n3 = Number(prompt("Masala 4.\n Natural son kiriting: "));
console.log(`${n3} ta Fibonachchi sonlari:`, arrFibanaci(n3));

let N4 = Number(prompt(" Masala 5.\n Massiv uzunligini kiriting: "));
let array = [];
for (let i = 0; i < N4; i++) {
  array.push(Number(prompt(`${i + 1}-elementni kiriting: `)));
}
console.log("Asl massiv:", array);
console.log("Teskari tartibdagi massiv:", arrTeskari([...array]));
//
