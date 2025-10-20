import promptSync from "prompt-sync";
import { arToqson } from "./masala_1_array.js";
import { arDarajason } from "./masala_2_array.js";
import { arrArifmetik } from "./masala_3_array.js";
import fibArray from "./masala_4_array.js";

const prompt = promptSync();

let n = Number(prompt("Natural son kiriting: "));
let n1 = Number(prompt("Natural son kiriting: "));
let n2 = Number(prompt("n: "));
let A = Number(prompt("A: "));
let D = Number(prompt("D: "));
let n3 = Number(prompt("Natural son kiriting: "));

let toq = arToqson(n);
let daraja = arDarajason(n1);

console.log(`${n} ta toq sonlar:`, toq);
console.log(`${n1} ta 2 ning darajalari:`, daraja);
console.log(arrArifmetik(n2, A, D));
console.log(`${n3} ta Fibonachchi sonlari:`, fibArray(n3));
