import fs from "fs";

fs.mkdir("Projects", { recursive: true }, (err) => {
  if (err) return console.log("Xato:", err);

  fs.writeFile("Projects/Frontend.txt", "Hello Everybody", (err) => {
    if (err) return console.log("Xato:", err);

    fs.writeFile("Projects/Backend.txt", "Hello Everybody", (err) => {
      if (err) return console.log("Xato:", err);

      fs.writeFile("Projects/Database.txt", "Hello Everybody", (err) => {
        if (err) return console.log("Xato:", err);

        console.log("Papka va fayllar yaratildi!");
      });
    });
  });
});
