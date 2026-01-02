import express from "express";
import { promises as fs } from "fs";
import ejs from "ejs";

const PORT = 3000;
const app = express();

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
//  STATIC
app.use("/images", express.static("public/images"));
app.use("/assets", express.static("public/assets"));

//  ROUTES

// HOME
app.get("/index.html", async (req, res) => {
  const home = await fs.readFile("public/view/index.html", "utf8");

  const result = ejs.render(home, {
    title: "Welcome to our website!",
    projectName: "My Gallery",
    description: "The next level image gallery",
    telegramUsername: "Jama_9133",
    whatsappUsername: "998957990034",
    instagramUsername: "jamshiddinbabajonov",
    linkedinUsername: "jamshiddin-babajonov-168705382",
    githupUsername: "jama050690",
    emailUsername: "jbm050690@gmail.com",
  });

  res.send(result);
});

// ELEMENTS
app.get("/my_projects.html", async (req, res) => {
  const elements = await fs.readFile("public/view/my_projects.html", "utf8");
  const result = ejs.render(elements, {
    title: "Elements",
    projectName: "My Gallery",
    description: "The next level image gallery",
    telegramUsername: "Jama_9133",
    whatsappUsername: "998957990034",
    instagramUsername: "jamshiddinbabajonov",
    linkedinUsername: "jamshiddin-babajonov-168705382",
    githupUsername: "jama050690",
    emailUsername: "jbm050690@gmail.com",
    images,
    projects,
  });
  res.send(result);
});

// GENERIC
app.get("/generic.html", async (req, res) => {
  const generic = await fs.readFile("public/view/generic.html", "utf8");
  const result = ejs.render(generic, {
    title: "Generic",
    projectName: "My Gallery",
    description: "The next level image gallery",
    telegramUsername: "Jama_9133",
    whatsappUsername: "998957990034",
    instagramUsername: "jamshiddinbabajonov",
    linkedinUsername: "jamshiddin-babajonov-168705382",
    githupUsername: "jama050690",
    emailUsername: "jbm050690@gmail.com",
    images,
  });
  res.send(result);
});

// SERVER
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
