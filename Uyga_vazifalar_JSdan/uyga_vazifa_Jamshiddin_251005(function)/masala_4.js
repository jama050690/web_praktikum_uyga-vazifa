const prompt = require("prompt-sync")();

// Foydalanuvchi kiritgan N soni gacha bo‘lgan sonlarning yig‘indisini hisobla.

function start_func(n) {
  let i = 1;
  let son = 0;
  while (i <= n) {
    son += i;
    i++;
  }
  return son;
}
let result = start_func(10);
console.log(result);
