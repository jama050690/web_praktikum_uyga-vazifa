//  Uzunlik L santimetrda berilgan. Undagi to'liq metrlar sonini aniqlovchi programma tuzilsin.
// (1m=100cm)

const prompt = require("prompt-sync")();

let l = Number(prompt("Butun son kiriting: "));
let m = 100;
let result = Math.floor(l / m);

console.log(result);
