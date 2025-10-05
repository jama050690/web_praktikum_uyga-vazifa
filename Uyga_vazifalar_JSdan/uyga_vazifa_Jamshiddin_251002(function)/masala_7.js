const prompt = require("prompt-sync")();

// 1 dan 20 gacha bo‘lgan sonlardan faqat 5 ga bo‘linadiganlarini chiqar va ularni sanab ber (nechta ekanini top).

function masala_7(start, end) {
  let count = 0;
  while (end >= start) {
    if (start % 5 == 0) {
      console.log(start);
      count++;
    }
    start++;
  }
  return count;
}
let result = masala_7(1, 20);
console.log("5 ga bo'linadigan sonlar: ", result);
