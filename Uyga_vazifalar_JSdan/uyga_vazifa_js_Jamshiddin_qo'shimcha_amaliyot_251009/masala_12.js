const prompt = require("prompt-sync")();

// 14-topshiriq
// Arrayning shift methodini yarating.

let arr = [1, 2, 3, 5, 6];
function myShift(array) {
  if (array.length === 0) return undefined;

  let first = array[0];

  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }

  array.length = array.length - 1;
  return first;
}

let result = myShift(arr);
console.log("Yangi massiv:", arr);
