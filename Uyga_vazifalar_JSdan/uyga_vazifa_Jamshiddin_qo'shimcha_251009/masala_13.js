const prompt = require("prompt-sync")();

// 15-topshiriq
// Arrayning unshift methodini yarating .
let arr = [1, 2, 3, 5, 6];

function myUnshift(array, element) {
  for (let i = array.length; i > 0; i--) {
    array[i] = array[i - 1];
  }

  array[0] = element;

  return array.length;
}

let result = myUnshift(arr, 10);
console.log("Yangi uzunlik:", result);
console.log("Yangi massiv:", arr);
