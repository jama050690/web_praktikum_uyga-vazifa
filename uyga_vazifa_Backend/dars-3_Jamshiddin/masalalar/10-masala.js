import fs from "fs";

function printFiles(fileList) {
  if (fileList.includes("config.json")) {
    console.log("config.json mavjud!");
  } else {
    fs.writeFile("./config.json", "Hello Everybody", (err) => {
      if (err) return console.log("Xato:", err);
    });
  }
}

const files = fs.readdirSync("./");
printFiles(files);
