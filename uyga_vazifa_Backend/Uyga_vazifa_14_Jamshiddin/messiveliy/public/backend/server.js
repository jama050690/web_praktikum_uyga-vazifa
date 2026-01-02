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

app.use(express.static(path.join(__dirname, "..")));

// DATA
const images = ["pic(01).avif", "pic(02).avif", "02.webp", "04.webp"];

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with HTML, CSS and JavaScript",
    image: "01.webp",
    link: "http://www.jamshiddin.uz/my_projects/",
    date: "2025",
  },
  {
    title: "Express + EJS App",
    description: "Dynamic website using Express and EJS",
    image: "06.avif",
    link: "http://www.jamshiddin.uz/my_projects/",
    date: "2025",
  },
  {
    title: "Gallery Project",
    description: "Simple image gallery project",
    image: "03.webp",
    link: "http://www.jamshiddin.uz/my_projects/",
    date: "2015",
  },
];

//  PORTFOLIO
app.get("/portfolio", (req, res) => {
  res.render("portfolio", {
    title: "My Portfolio",
    images,
    contacts: "My concats",
    currentPage: "portfolio",
    emailUsername: "jbm050690@gmail.com",
    telegramUsername: "Jama_9133",
    whatsappUsername: "998957990034",
    instagramUsername: "jamshiddinbabajonov",
    linkedinUsername: "jamshiddin-babajonov-168705382",
    githupUsername: "jama050690",
  });
});

// MY PROJECTS
app.get("/my_projects", (req, res) => {
  res.render("my_projects", {
    title: "My Gallery",
    projectName: "My Gallery",
    description: "The next level image gallery",
    images,
    contacts: "My concats",
    currentPage: "projects",
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
  res.render("about_me", {
    title: "About Me",
    contacts: "My concats",
    currentPage: "about",
    fullName: "Babajonov Jamshiddin",
    role: "Front-End Developer",
    bio: "I'm a passionate Front-End Developer focused on building clean, responsive, and user-friendly web applications.",
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
    telegramUsername: "Jama_9133",
    whatsappUsername: "998957990034",
    instagramUsername: "jamshiddinbabajonov",
    linkedinUsername: "jamshiddin-babajonov-168705382",
    githupUsername: "jama050690",
    emailUsername: "jbm050690@gmail.com",
  });
});

// START SERVER

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
