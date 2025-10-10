const prompt = require("prompt-sync")();
// 4-topshiriq.

// Berilgan mahsulotlar massividagi ob'ektlarni narxi bo'yicha o'sish tartibida tartiblang.

// let books=[
//         { nom: 'kitob', narx: 25000 },
//         { nom: 'qalam', narx: 1000 },
//                     { nom: 'daftar', narx: 5000 },
//         { nom: 'oʻchirgʻich', narx: 2000 }
//     ]

// // Natija : [
//  	        { nom: 'qalam', narx: 1000 },
//                     { nom: 'oʻchirgʻich', narx: 2000 },
//                     { nom: 'daftar', narx: 5000 },
//                     { nom: 'kitob', narx: 25000 }
//                 ]

let books = [
  { nom: "kitob", narx: 25000 },
  { nom: "qalam", narx: 1000 },
  { nom: "daftar", narx: 5000 },
  { nom: "oʻchirgʻich", narx: 2000 },
];
const arrayNarxtartib = (books) => {
  for (let i = 0; i < books.length; i++) {
    for (let j = i + 1; j < books.length; j++) {
      if (books[i].narx > books[j].narx) {
        let temp = books[i];
        books[i] = books[j];
        books[j] = temp;
      }
    }
  }
  return books;
};
let result = arrayNarxtartib(books);
console.log(books);
