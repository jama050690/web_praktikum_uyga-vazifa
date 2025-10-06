const prompt = require("prompt-sync")();

// 10 dan 1 gacha sonlarni teskari tartibda chiqar.

function start_func(start, end) {
  while (start > end) {
    console.log(start);

    start--;
  }
  return start;
}
let result = start_func(10, 1);
console.log(result);
