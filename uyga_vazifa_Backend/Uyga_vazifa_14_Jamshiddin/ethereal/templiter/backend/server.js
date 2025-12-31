import express from "express";
import path from "path";
import ejs from "ejs";
import { fileURLToPath } from "url";
import siteData from "../backend/data/siteData.js";

const app = express();
const PORT = 3000;

// __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// VIEW ENGINE
app.engine("ejs", ejs.renderFile);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/view"));

// STATIC
app.use("/assets", express.static(path.join(__dirname, "../public/assets")));
app.use("/images", express.static(path.join(__dirname, "../public/images")));

// ROUTES
app.get("/", (req, res) => {
  res.render("index", siteData);
});

app.get("/demo", (req, res) => {
  res.render("index-demo", siteData);
});

// START
app.listen(PORT, () => {
  console.log(` Server running: http://localhost:${PORT}`);
});
