import fs from "fs";

if (fs.existsSync("Backup")) {
  console.log("Backup papka mavjud");
} else {
  fs.mkdirSync("Backup", { recursive: true });
  console.log("Backup papka yaratildi");
}
function printFiles(fileList) {
  fileList.forEach((file) => {
    if (file.endsWith(".json")) {
      console.log("Topilgan JSON:", file);
      const src = `./${file}`;
      const dest = `./Backup/${file}`;
      fs.copyFileSync(src, dest);
      console.log(`→ ${file} Backup papkasiga nusxalandi`);
    }
  });
}

fs.readdir("./", (err, files) => {
  if (err) {
    return console.log("Fayllarni o'qishda xato:", err.message);
  }

  printFiles(files);
});
