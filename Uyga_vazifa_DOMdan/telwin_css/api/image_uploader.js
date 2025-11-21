const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());
app.use("/images", express.static("images")); // static folder

const storage = multer.diskStorage({
  destination: "images/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

app.post("/upload", upload.single("photo"), (req, res) => {
  const fileUrl = `http://localhost:3001/images/${req.file.filename}`;
  res.json({ url: fileUrl });
});

app.listen(3001, () => {
  console.log("Server running on 3001");
});
