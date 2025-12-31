import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views"));

// STATIC
app.use("/assets", express.static(path.join(__dirname, "../public/assets")));
app.use("/images", express.static(path.join(__dirname, "../public/images")));

// DATA
const siteData = {
  title: "Lionel Messi | Profile",
  projectName: "Lionel Messi",
  descreption: "World Champion • Football Legend",

  telegramUsername: "Jama_9133",
  whatsappUsername: "998957990034",
  instagramUsername: "jamshiddinbabajonov",
  linkedinUsername: "jamshiddin-babajonov-168705382",
  githubUsername: "jama050690",

  images: [
    {
      full: "gallery/fulls/messi(01).webp",
      thumb: "gallery/thumbs/messi(01).webp",
      name: "World Cup 2022",
      descreption: "Champion moment",
    },
  ],
};

// ROUTES
app.get("/index", (req, res) => {
  res.render("index", siteData);
});

app.get("/demo", (req, res) => {
  res.render("index-demo", siteData);
});

// START
app.listen(PORT, () => {
  console.log(` Server running: http://localhost:${PORT}`);
});
