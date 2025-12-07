import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Eski fayl nomini kiriting: ", (oldName) => {
  if (!fs.existsSync(oldName)) {
    console.log("Xatolik: Bunday fayl mavjud emas!");
    rl.close();
    return;
  }
  rl.question("Yangi fayl nomini kiriting: ", (newName) => {
    try {
      fs.renameSync(oldName, newName);
      console.log(" Fayl nomi muvaffaqiyatli o'zgartirildi!");
    } catch (err) {
      console.log(" Xatolik yuz berdi:", err.message);
    }
    rl.close();
  });
});
