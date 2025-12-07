import fs from "fs";
import path from "path";
// Papka mavjudligini tekshiring — bo‘lmasa yarating
// Vazifa:
//  storage/images degan nested papkani tekshiring:
// bo‘lmasa fs.mkdir() bilan rekursiv tarzda yarating

// bo‘lsa "Papkalar mavjud" deb chiqaring
const filePath = path.resolve("system/dianostics.txt");
let folderExists = fs.existsSync(filePath);
if (!folderExists) {
  console.log("jild topilmadi, yangi yaratamiz...");
  mkdirs(newPath);
}
masala_9();
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
