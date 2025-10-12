const prompt = require("prompt-sync")();

// let arr = [10, 20, 30, 40, 50, 60, 70];
// let arrIkki = [];

// for (let i = 0; i < arr.length; i++) {
//   let count = 0; // har bir indeks uchun bo‘luvchilar soni
//   for (let j = 1; j <= i; j++) {
//     if (i % j === 0) {
//       count++;
//     }
//   }

//   if (count === 2) { // agar indeks tub bo‘lsa
//     arrIkki.push(arr[i]);
//   }
// }

// console.log("Asl array:", arr);
// console.log("Indexi tub bo‘lgan elementlar:", arrIkki);

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
