const prompt = require("prompt-sync")();

// 1-topshiriq.
// Berilgan sonlar massividan faqat juft sonlarni toping va har birini kvadratga ko'taring.
// Natijalarni yangi massivda qaytaring.
// let arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]     // Natija : [4, 16, 36, 64, 100]

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arrayNatija = [];
const arrayJuft = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arrayNatija[j] = arr[i] ** 2;
    }
  }
  return arrayNatija;
};
let result = arrayJuft(arr);
console.log(result);
