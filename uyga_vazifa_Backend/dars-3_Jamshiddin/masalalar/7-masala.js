import fs from "fs";

const folder = "temp";
function papka_yaratish() {
  fs.mkdirSync(folder, { recursive: true });
  console.log(" Papka yaratildi!");
}

function papka_ochirish() {
  const filePath = `./${folder}`;
  const files = fs.readdirSync(filePath);
  if (files.length === 0) {
    fs.rmdirSync(filePath);
    console.log("Papka o'chirildi!");
  } else {
    console.log("Papka ichida fayllar bor, o'chirilmasin!");
    console.log("Fayllar:", files);
  }
}
papka_yaratish();
setTimeout(() => papka_ochirish(), 10000);
