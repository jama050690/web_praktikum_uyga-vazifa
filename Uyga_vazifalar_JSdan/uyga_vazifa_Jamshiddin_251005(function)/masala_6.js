const prompt = require("prompt-sync")();

// 1 dan 30 gacha bo‘lgan sonlarning faqat juft sonlarini va ularning kvadratlarini chiqar.

function start_func(start, end) {
  while (start <= end) {
    if (start % 2 === 0) {
      console.log(start, start ** 2);
    }
    start++;
  }
  return start;
}
let result = start_func(1, 30);
