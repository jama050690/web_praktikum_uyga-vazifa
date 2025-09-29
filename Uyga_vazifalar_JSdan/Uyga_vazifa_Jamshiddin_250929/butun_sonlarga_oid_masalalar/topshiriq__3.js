// Fayining hajmi baytlarda berilgan. Bo'lib butunni olish operatsiyasidan foydalanib fayl hajmining to’liq
//  kilobaytlarda ifodalovchi programma tuzilsin. (1Kb=1024 bayt)

const prompt = require("prompt-sync")();

let f = Number(prompt("Butun son kiriting: "));
let k = 1024;
let result = f / 1024;
console.log(result);
