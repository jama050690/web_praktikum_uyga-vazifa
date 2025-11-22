const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use("/images", express.static("images")); // static folder

const storage = multer.diskStorage({
  destination: "images/",
  filename: (req, file, cb) => cb(null, file.originalname),
});

const upload = multer({ storage });

app.post("/upload", upload.single("photo"), (req, res) => {
  const filePath = path.join(__dirname, "images", req.file.originalname);

  // 1) Fayl borligini tekshiramiz
  if (fs.existsSync(filePath)) {
    return res
      .json({
        url: `http://localhost:3001/images/${req.file.originalname}`,
        message: "Fayl allaqachon mavjud, saqlanmadi.",
      })
      .status(304);
  }

  const fileUrl = `http://localhost:3001/images/${req.file.filename}`;
  res.json({ url: fileUrl });
  // .status(201);
});

app.listen(3001, () => {
  console.log("Server running on 3001");
});
