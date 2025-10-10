const prompt = require("prompt-sync")();

// 12-topshiriq;
// array ni oxiridan index(array.Pop) o'chirish;

let arr = [2, 3, 4, 6];

// arr/pop;
// console.log(arr);

function myPop(arr) {
  arr.lenght = arr.lenght - 1;
  return arr;
}
console.log(myPop(arr));
