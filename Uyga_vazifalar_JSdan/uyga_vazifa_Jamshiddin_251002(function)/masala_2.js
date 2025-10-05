const prompt = require("prompt-sync")();

// 1 dan 50 gacha sonlardan 3 ga bo‘linadiganlarini ekranga chiqarsin.

function start_func(start, end) {
  let count = 1;
  while (start <= end) {
    if (start % 3 === 0) {
      console.log(start);
      count++;
    }
    start++;
  }
  return count;
}
let result = start_func(1, 50);
console.log(result);
