const prompt = require("prompt-sync")();

// 8-topshiriq.
// Figura (x, y) katakchada joylashgan, figura oq katakda joylashgan bo’lsa “WHITE”, qora katakda joylashgan bo’lsa “BLACK” yozuvlarini qaytaruvchi check(x, y) funksiyasini tuzing.

let x = prompt("Harf kiriting (a-h): ");
let y = Number(prompt("Son kiriting (1-8): "));
let chess = [];

for (let i = 0; i < 8; i++) {
  chess[i] = [];
  for (let j = 0; j < 8; j++) {
    chess[i][j] = (i + j) % 2 === 0 ? "BLACK" : "WHITE";
  }
}

let arraycheck = (x, y) => {
  {
    let letters = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7 };

    x = x.toLowerCase();
    let col = letters[x];
    let row = y - 1;

    if (col === undefined || row < 0 || row > 7) {
      return " Noto‘g‘ri koordinata!";
    }

    return chess[row][col];
  }
};
let result = arraycheck(x, y);
console.log(arraycheck(x, y));
