import express from "express";
import path from "path";
import fs from "fs/promises";
import ejs from "ejs";
import { fileURLToPath } from "url";

const PORT = 3000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// static
app.use("/images", express.static(path.join(__dirname, "../images")));
app.use("/assets", express.static(path.join(__dirname, "../assets")));

// DATA
const images = [
  "images/01.avif",
  "images/02.webp",
  "images/03.webp",
  "images/04.webp",
  "images/05.webp",
  "images/06.avif",
  "images/07.webp",
  "images/08.avif",
  "images/09.webp",
  "images/logo.avif",
];

const navItems = [
  { href: "#top", icon: "fa-home", text: "Intro" },
  { href: "#about", icon: "fa-user", text: "About" },
  { href: "#contact", icon: "fa-envelope", text: "Contact" },
];

// ROUTE
app.get("/index.html", async (req, res) => {
  const html = await fs.readFile(path.join(__dirname, "../index.html"), "utf8");

  const rendered = ejs.render(html, {
    title: "Welcome to our website!",
    projectName: "This is my website",
    description: "The next level my images gallery",
    telegramUsername: "Jama_9133",
    whatsapUsername: "998957990034",
    emailUsername: "jbm050690@gmail.com",
    instagramUsername: "jamshiddinbabajonov",
    linkedinUsername: "jamshiddin-babajonov-168705382",
    githubUsername: "jama050690",
    images,
    navItems,
  });

  res.send(rendered);
});

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
