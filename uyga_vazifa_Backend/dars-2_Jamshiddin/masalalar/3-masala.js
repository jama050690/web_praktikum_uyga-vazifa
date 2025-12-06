import fs from "fs";

console.log(`Starting the program at ${new Date()}`);

const filePath = "./diary.txt";
setInterval(() => write_text(), 24 * (3600 * 1000));

function write_text() {
  try {
    fs.readFile(filePath, "utf8", (err, data) => {
      data = data != undefined ? data : "";

      const days = 90 + data.split("\n").length;

      let lineCount = 0;

      if (!err && data.trim() !== "") {
        lineCount = data.split("\n").filter(Boolean).length;
      }

      const lineNumber = lineCount + 1;
      const text = `${lineNumber},text: Jamshiddin at study for ${days} days, date: ${new Date().toISOString()}\n`;

      fs.appendFile(filePath, text, (err) => {
        if (err) return console.log("Yozishda xatolik:", err);
        console.log(`Yangi qayd qo‘shildi: ${text}`);
        console.log(`Hozirgi qaydlar soni: ${lineNumber}`);
      });
    });
  } catch (error) {
    console.error(`Xatolik yuz berdi: ${error}`);
  }
}
