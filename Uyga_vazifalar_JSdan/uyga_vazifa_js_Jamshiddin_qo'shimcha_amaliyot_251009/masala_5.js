// 5-topshiriq.
// Berilgan mahsulotlar massividagi ob'ektlarni narxi bo'yicha kamayish tartibida tartiblang.

let books = [
  { nom: "kitob", narx: 25000 },
  { nom: "qalam", narx: 1000 },
  { nom: "daftar", narx: 5000 },
  { nom: "oʻchirgʻich", narx: 2000 },
];

const arrayNarxteskari = (books) => {
  for (let i = 0; i < books.length; i++) {
    for (let j = i + 1; j < books.length; j++) {
      if (books[i].narx < books[j].narx) {
        let temp = books[i];
        books[i] = books[j];
        books[j] = temp;
      }
    }
  }
  return books;
};
let result = arrayNarxteskari(books);
console.log(books);
