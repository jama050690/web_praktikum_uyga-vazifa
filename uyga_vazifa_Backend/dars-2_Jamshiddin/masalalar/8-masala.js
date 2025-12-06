import fs from "fs";

function printFiles(fileList) {
  fileList.forEach((file) => {
    if (file.includes(".txt")) {
      console.log(file);
    }
  });
}

fs.readdir("./", (err, files) => {
  if (err) {
    return console.log("Fayllarni oqishda xato:", err.message);
  }

  printFiles(files);
});
