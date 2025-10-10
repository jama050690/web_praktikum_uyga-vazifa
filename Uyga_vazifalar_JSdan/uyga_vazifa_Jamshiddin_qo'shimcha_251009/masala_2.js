const prompt = require("prompt-sync")();

// 2-topshiriq.
// Berilgan sonlar massividagi elementlarni o'sish tartibida (kichikdan kattaga) tartiblang.
// let arr= [2, 5, 10, 7, 4, 6, 1, 0, 10, 8]   // Natija : [ 1, 2, 4,  5, 6, 7, 8, 10 ]

let arr = [2, 5, 10, 7, 4, 6, 1, 0, 10, 8];
const arrayTartib = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};
let result = arrayTartib(arr);
console.log(arr);
