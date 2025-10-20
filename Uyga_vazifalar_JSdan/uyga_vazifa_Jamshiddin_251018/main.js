import promptSync from "prompt-sync";
import { arToqson, arDarajason } from "./script.js";

const prompt = promptSync();

let n = Number(prompt("Natural son kiriting: "));

let toq = arToqson(n);
let daraja = arDarajason(n);

console.log(`${n} ta toq sonlar:`, toq);
console.log(`${n} ta 2 ning darajalari:`, daraja);
