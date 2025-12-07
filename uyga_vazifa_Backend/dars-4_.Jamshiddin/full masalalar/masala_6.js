import os from "os";
import fs from "fs";

function masala_6() {
  const systemInfo = {
    platform: os.platform(),
    cpus: os.cpus(),
    totalMemory: os.totalmem(),
  };

  const jsonData = JSON.stringify(systemInfo, null, 2);

  fs.writeFile("data/system_info.json", jsonData, (err) => {
    if (err) {
      return console.log("Fayl yozishda xatolik:", err.message);
    }
    console.log("System ma'lumotlari system_info.json ga yozildi!");
  });
}

masala_6();
