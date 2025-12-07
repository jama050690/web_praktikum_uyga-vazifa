import fs from "fs";
import path from "path";
import os, { platform } from "os";

// OS bo‘yicha to‘liq diagnostika fayli yaratish
// system degan papka yarating.
//  Ichida diagnostics.txt fayli bo‘lsin.
//  Ichiga:
// OS turi

// Arxitektura:CPU modeli: Uptime, Home directory,Current user name
// ma’lumotlarini yozing. Modullar: os, fs, path

const folderPath = path.resolve("system");
const filePath = path.resolve(folderPath, "diagnostics.tx");
function masala_10() {
  let folderExists = fs.existsSync(filePath);
  if (!folderExists) {
    console.log("jild topilmadi, yangi yaratamiz...");
    mkdirs(folderPath);
  }
  const data = `
OS turi: ${os.platform()}
Arxitektura: ${os.arch()}
CPU modeli: ${os.cpus()[0].model}
Uptime (sekund): ${os.uptime()}
Home directory: ${os.homedir()}
Current user: ${os.userInfo().username}
`;
  writeToFile(data);
}

function writeToFile(data) {
  fs.writeFile(filePath, data, (error) => {
    if (error) {
      console.error("Ma'lumotlarlar yozilmadi!!!", error);
    } else {
      console.log("File ichiga ma'lumotlar yozildi!");
    }
  });
}

function mkdirs(dir_path) {
  const paths = dir_path.split("\\");
  let dir = "";

  paths.forEach((folder) => {
    dir += folder + "\\";
    let exists = fs.existsSync(dir);
    if (!exists) {
      fs.mkdirSync(dir);
    }
  });
}

masala_10();
