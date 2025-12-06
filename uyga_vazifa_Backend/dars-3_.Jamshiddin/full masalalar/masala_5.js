import fs from "fs";
import path from "path";

// Papkada nechta fayl borligini aniqlang
// fs.readdir() yordamida logs papkasidagi fayllar sonini chiqaring.
// Modullar: fs, path

function masala_5() {
  const log = path.join(process.cwd(), "masalalar");

  fs.readdir(log, (err, files) => {
    if (err) {
      return console.log("Papka topilmadi yoki xatolik:", err.message);
    }

    console.log(`Masalalar papkasida ${files.length} ta fayl bor`);
  });
}

masala_5();
