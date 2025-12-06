import fs from "fs";
import path from "path";

// Faylni o‘qib, shu faylning papka nomini chiqaring
// data/info.txt faylini o‘qib, matnni chiqarasiz.
//  Keyin path.dirname() yordamida uning joylashgan papkasini ekranga chiqaring.
function masala_2() {
  fs.readFile("./info.txt", "utf8", (err, data) => {
    if (err) {
      console.log("Fayl topilmadi yoki xatolik yuz berdi!");
      return;
    }
    console.log(data);
  });
  let dirname = path.dirname("data/info.txt");
  console.log(dirname);
}

masala_2();
