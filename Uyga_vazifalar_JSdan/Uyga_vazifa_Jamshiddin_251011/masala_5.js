const prompt = require("prompt-sync")();

// masala_5;
// bir arraydan indexlardan tublarini  boshqa arrayga ko'chirish(fonctionda);
let arr = [1, 2, 3, 5, 7, 8, 19, 20];
const myArray = (arr) => {
  const tubChecker = (num) => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i == 0) {
        count++;
      }
    }
    if (count == 2) {
      return num;
    }
    return false;
  };
  const arrIkki = [];
  for (let i = 0; i < arr.length; i++) {
    const num = tubChecker(arr[i]);
    if (num) {
      arrIkki.push(num);
    }
  }
  return arrIkki;
};
let result = myArray(arr);
console.log(result);

// bir arraydan indexlardan tublarini  boshqa arrayga ko'chirish(fora);

const arrIkki = [];
for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (let j = 1; j <= arr[i]; j++) {
    if (arr[i] % j === 0) {
      count++;
    }
  }
  if (count === 2) {
    arrIkki.push(arr[i]);
  }
}
console.log(arrIkki);
