import fs from "fs";

let bookname = process.argv[2];

if (!bookname) {
  console.log("Iltimos kitob nomini kiriting!");
  process.exit(0);
}

bookname = bookname.trim().toLowerCase();

fs.readFile("./kitob.json", "utf8", (err, data) => {
  let books = [];
  if (!err) {
    try {
      books = JSON.parse(data);

      books.filter((book) => {
        if (book.name.toLowerCase().includes(bookname)) {
          console.table(book);
        }
      });
    } catch (e) {
      console.log("Fayl noto‘g‘ri formatda. Yangi JSON fayl yaratildi.");
      books = [];
    }
  }
});
