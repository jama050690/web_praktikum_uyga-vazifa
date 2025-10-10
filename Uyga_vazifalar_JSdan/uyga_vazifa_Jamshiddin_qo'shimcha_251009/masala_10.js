const prompt = require("prompt-sync")();
// 12-topshiriq;
// array ni oxiriga yangi index qo'shish(Push);
let arr = [1, 2, 3, 5, 6];
function myPush(array, element) {
  array[array.length] = element;
  return array;
}
let result = myPush(arr, 15);
console.log(result);
