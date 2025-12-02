import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Fayl nomini kiriting: ", (filename) => {
  if (!fs.existsSync(filename)) {
    console.log("Xatolik: Bunday fayl mavjud emas!");
    rl.close();
    return;
  }

  fs.stat(filename, (err, stats) => {
    if (err) {
      console.log(" Ma'lumot olishda xato:", err.message);
    } else {
      console.log("Fayl haqida ma'lumot:");
      console.log("Hajmi:", stats.size, "bayt");
      console.log("Yaratilgan:", stats.birthtime);
      console.log("Faylmi?", stats.isFile());
    }

    rl.close();
  });
});
