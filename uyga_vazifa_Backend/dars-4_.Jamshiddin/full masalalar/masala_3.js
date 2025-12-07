import os from "os";
import fs from "fs";
import path from "path";

// OS moduli yordamida user papkasida fayl yaratish
// Vazifa:
//  os.homedir() orqali userning home directory manzilini oling.
//  O‘sha papkaga settings.json nomli fayl yarating.
function masala_3() {
  const home = os.homedir();
  console.log("Home:", home);

  const filePath = path.join(home, "settings.json");

  fs.writeFile(filePath, "utf8", (err) => {
    if (err) {
      return console.log("Fayl yaratishda xatolik:", err.message);
    }
    console.log("Fayl yaratildi:", filePath);
  });
}

masala_3();
