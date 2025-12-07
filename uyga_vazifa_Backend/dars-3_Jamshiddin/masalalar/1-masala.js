import fs from "fs";

const data = ["Javlon", "Tolmas", "Ahmad", "Suhrob", "Sardor"].join("\n");

fs.writeFile("./student.txt", data, (err) => {
  if (err) {
    console.log(err);
  } else {
    fs.readFile("./student.txt", "utf8", (error, contents) => {
      if (error === null) {
        console.log(contents);
      } else {
        console.log(error);
      }
    });
  }
});
