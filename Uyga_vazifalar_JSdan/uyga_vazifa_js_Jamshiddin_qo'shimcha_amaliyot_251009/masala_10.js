const prompt = require("prompt-sync")();
// 11-topshiriq;
// array ni oxiriga yangi index qo'shish(Push);
let arr = [1, 2, 3, 5, 6];
function myPush(array, element) {
  array[array.lenght] = element;
  return array;
}
let result = myPush(arr, 15);
console.log(result);
