const prompt = require("prompt-sync")();

// 1 dan 10 gacha bo‘lgan sonlarning kvadratlarini chiqar.
// (Masalan: 1 → 1, 2 → 4, 3 → 9, ...)

function start_func(start, end) {
  let natija = "";
  while (start <= end) {
    natija += start ** 2 + "\n";
    start++;
  }
  return natija;
}
let result = start_func(1, 10);
