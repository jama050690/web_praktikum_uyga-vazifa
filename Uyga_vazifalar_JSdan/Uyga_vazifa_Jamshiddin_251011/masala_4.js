const prompt = require("prompt-sync")();

// masala_4;
// stringni teskari qilish va numerga o'girish(forda);

let str = "123456789";
let newArr = [];
for (let i = str.length - 1; i >= 0; i--) {
  newArr.push(Number(str[i]));
}
console.log(newArr);

// stringni teskari qilish va numerga o'girish(forda);

const myString = (num) => {
  let str = "123456789";
  let newArr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    newArr.push(Number(str[i]));
  }
  return newArr;
};
let result = myString(str);
console.log(result);
