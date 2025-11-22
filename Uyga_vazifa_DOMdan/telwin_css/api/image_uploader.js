const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use("/images", express.static("images"));

// 1) Multer memory storage — fayl avval xotirada bo‘ladi (req.file.buffer)
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post("/upload", upload.single("photo"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Fayl topilmadi" });
    }

    const filename = req.file.originalname;
    const destPath = path.join(__dirname, "..", "images", filename);

    // 2) Fayl mavjudligini tekshirish
    if (fs.existsSync(destPath)) {
      console.log("Fayl allaqachon mavjud:", filename);
      return res.status(200).json({
        exists: true,
        url: `http://localhost:3001/images/${encodeURIComponent(filename)}`,
        message: "Fayl allaqachon mavjud, saqlanmadi.",
      });
    }

    // 3) Agar yo'q bo'lsa — xotiradagi bufferni diskga yozamiz
    fs.writeFileSync(destPath, req.file.buffer);
    console.log("Fayl saqlandi:", filename);

    return res.status(201).json({
      exists: false,
      url: `http://localhost:3001/images/${encodeURIComponent(filename)}`,
      message: "Fayl muvaffaqiyatli yuklandi.",
    });
  } catch (err) {
    console.error("Upload xatosi:", err);
    return res.status(500).json({ message: "Server xatosi" });
  }
});

app.listen(3001, () => console.log("Server running on 3001"));
