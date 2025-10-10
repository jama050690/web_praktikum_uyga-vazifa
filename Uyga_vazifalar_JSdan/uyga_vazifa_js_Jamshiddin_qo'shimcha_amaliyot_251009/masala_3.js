const prompt = require("prompt-sync")();

// 3Berilgan sonlar massividagi elementlarni ka    mayish tartibida (kattadan kichikka) tartiblang.
// let arr= [2, 5, 10, 7, 4, 6, 1, 0, 10, 8]   // Natija : [ 10, 8, 7, 6, 5, 4, 2, 1 ]

let arr = [2, 5, 10, 7, 4, 6, 1, 0, 10, 8];

const arrayTeskaritartib = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};
let result = arrayTeskaritartib(arr);
console.log(arr);
