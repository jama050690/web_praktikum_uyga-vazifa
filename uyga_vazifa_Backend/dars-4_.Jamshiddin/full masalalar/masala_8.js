import { error } from "console";
import fs from "fs";
import path from "path";

// Faylni boshqa papkaga ko‘chiring
// fs.rename() yordamida uploads/avatar.png faylini public/images/avatar.png manziliga ko‘chiring.
// Modullar: fs, path

const oldPath = path.resolve("update/images");
const newPath = path.resolve("public/images");
const FILE_NAME = "avatar.png";
function masala_8() {
  let filePath = path.join(oldPath, FILE_NAME);
  let newFilePath = path.join(newPath, FILE_NAME);
  const file = fs.existsSync(filePath);
  if (!file) {
    console.log("File topilmadi!", filePath);
    return;
  }

  let folderExists = fs.existsSync(newPath);

  if (!folderExists) {
    console.log("jild topilmadi, yangi yaratamiz...", newPath);
    mkdirs(newPath);
  }

  console.log("File ni ko'chiramiz...");
  fs.rename(filePath, newFilePath, (err) => {
    if (err) {
      console.log("Fayl nomi va manzil o'zgarmadi!!!");
    } else {
      console.log("File muvaffaqiyatli ko'chirildi");
    }
  });
}
masala_8();

/**
 * Berilgan absolute path bo`yicha yo`q jildlarni yaratish funksiyasi
 * @param {*} path
 */
function mkdirs(path) {
  const paths = path.split("\\");
  let dir = "";

  paths.forEach((folder) => {
    dir += folder + "\\";
    let exists = fs.existsSync(dir);
    if (!exists) {
      fs.mkdirSync(dir);
    }
  });
}
