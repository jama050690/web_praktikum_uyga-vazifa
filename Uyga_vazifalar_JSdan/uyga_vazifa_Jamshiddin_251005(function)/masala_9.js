const prompt = require("prompt-sync")();

//  1 dan 100 gacha bo‘lgan sonlardan 3 va 5 ga bir vaqtda bo‘linadiganlarini ekranga chiqar.

function masala_9(start, end) {
  while (end > start) {
    if (start % 3 === 0 && start % 5 === 0) {
      console.log(start);
    }
    start++;
  }
  return start;
}
let result = masala_9(1, 100);
console.log(result);
