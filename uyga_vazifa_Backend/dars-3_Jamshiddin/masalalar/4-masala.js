import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Fayl nomini kiriting: ", (filename) => {
  if (!fs.existsSync(filename)) {
    console.log("Xatolik: Bunday fayl mavjud emas!");
  } else {
    fs.unlinkSync(filename);
    console.log("Fayl o'chirildi!");
  }
  rl.close();
});
