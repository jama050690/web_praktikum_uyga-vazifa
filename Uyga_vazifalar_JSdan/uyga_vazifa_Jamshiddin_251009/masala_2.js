const prompt = require("prompt-sync")();
// masala_2;
// array ichidagi 2 dan katta bo'lgan sonlarni boshqa array ga ko'chiring

let arr = [2, 3, 4, 5, 6, 7, 8, 12];

let arrTwo = [];

const greater = () => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 2) {
      arrTwo.push(arr[i]);
    }
  }
  return arrTwo;
};

let result = greater();
console.log(result);
