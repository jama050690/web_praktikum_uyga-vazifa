const prompt = require("prompt-sync")();

// 1 dan 20 gacha bo‘lgan sonlarning ko‘paytmasini hisobla.

function start_func(start, end) {
  let count = 1;
  while (start <= end) {
    count *= start;

    start++;
  }
  return count;
}
let result = start_func(1, 20);
console.log(result);
