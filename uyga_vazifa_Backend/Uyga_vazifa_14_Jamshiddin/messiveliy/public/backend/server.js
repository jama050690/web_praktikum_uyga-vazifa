import express from "express";
import { promises as fs } from "fs";
import ejs from "ejs";

const PORT = 3000;
const app = express();

//  DATA
const images = [
  {
    image: {
      full: "/images/01.jpg",
      thumb: "/images/02.jpg",
    },
    name: "Diam compus accumsan",
    description: "lorem in contact is not problem",
  },
];

//  STATIC
app.use("/images", express.static("images"));
app.use("/assets", express.static("assets"));

//  ROUTES

// HOME
app.get("/index.html", async (req, res) => {
  const home = await fs.readFile("view/index.html", "utf8");

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
    images,
  });

  res.send(result);
});

// ELEMENTS
app.get("/elements.html", async (req, res) => {
  const elements = await fs.readFile("view/elements.html", "utf8");
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
  });
  res.send(result);
});

// GENERIC
app.get("/generic.html", async (req, res) => {
  const generic = await fs.readFile("view/generic.html", "utf8");
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
