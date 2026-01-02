import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// ESM uchun __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// EJS CONFIG
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "view"));

// STATIC FILES

app.use(
  "/images",
  express.static(path.join(__dirname, "..", "public", "images"))
);
app.use(
  "/assets",
  express.static(path.join(__dirname, "..", "public", "assets"))
);

// DATA
const images = [
  "pic(01).avif",
  "pic(02).avif",
  "01.webp",
  "02.webp",
  "03.webp",
  "04.webp",
  "05.webp",
  "06.avif",
  "07.avif",
  "08.avif",
];

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with HTML, CSS and JavaScript",
    image: "06.avif",
    link: "http://www.jamshiddin.uz/my_projects/",
    date: "2025",
  },
  {
    title: "Express + EJS App",
    description: "Dynamic website using Express and EJS",
    image: "pic(02).avif",
    link: "http://www.jamshiddin.uz/my_projects/",
    date: "2025",
  },
  {
    title: "Gallery Project",
    description: "Simple image gallery project",
    image: "03.webp",
    link: "http://www.jamshiddin.uz/my_projects/",
    date: "2024",
  },
];

// HOME / PORTFOLIO
app.get("/portfolio", (req, res) => {
  res.render("portfolio", {
    title: "My Portfolio",
    projects,
  });
});

// MY PROJECTS
app.get("/my-projects", (req, res) => {
  res.render("my_projects", {
    title: "My Gallery",
    projectName: "My Gallery",
    description: "The next level image gallery",
    images,
    projects,
    telegramUsername: "Jama_9133",
    whatsappUsername: "998957990034",
    instagramUsername: "jamshiddinbabajonov",
    linkedinUsername: "jamshiddin-babajonov-168705382",
    githupUsername: "jama050690",
    emailUsername: "jbm050690@gmail.com",
  });
});

// ABOUT ME
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    fullName: "Saidjalol Toshkhujaev",
    role: "Front-End Developer",
    bio: "I’m a passionate Front-End Developer focused on building clean, responsive, and user-friendly web applications.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React",
      "Tailwind CSS",
      "Git & GitHub",
    ],
    email: "jbm050690@gmail.com",
    phone: "+998 95 799 00 34",
  });
});

// START SERVER

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
