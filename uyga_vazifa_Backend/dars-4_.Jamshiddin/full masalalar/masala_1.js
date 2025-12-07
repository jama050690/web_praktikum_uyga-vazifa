import fs from "fs";

// Fayl yaratish va unga yozish
// Vazifa:
//  data papkasida info.txt fayli bo‘lmasa — yarating. Ichiga "Hello Node.js" matnini yozing.

fs.access("data/info.txt", (err, constants) => {
  if (!err) {
    console.log("Bu fayl papkada mavjud!!");
  } else {
    fs.writeFile("data/info.txt", "Hello Node.js", (err) => {
      if (err) {
        return console.log("Fayl yaratishda xatolik!");
      }
      console.log("Fayl yaratildi!");
    });
  }
});
