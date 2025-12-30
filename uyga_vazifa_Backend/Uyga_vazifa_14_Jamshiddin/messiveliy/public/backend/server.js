import express from "express";
import { promises as fs } from "fs";
import ejs from "ejs";
const PORT = 3000;
const app = express();
const images = [
  {
    image: {
      full: "images/(01).jpg",
      thumb: "images/(02).jpg",
    },
    name: "Diam compus accumsan",
    description: "lorem in contact is not problem",
  },
];

app.use("/images", express.static("public/images"));
app.use("/assets", express.static("public/assets"));
app.get("/", async (req, res) => {
  const home = await fs.readFile("./view/index.html", "utf8");
  const home_1 = await fs.readFile("./view/elements.html", "utf8");
  const home_2 = await fs.readFile("./view/generic.html", "utf8");
  const result = ejs.render(home, home_1, home_2, {
    title: "Welcome to our website!",
    projectName: "My Gallery",
    descreption: "The next level image gallery",
    telegramUsername: "Jama_9133",
    whatsapUsername: 998957990034,
    emailUsername: "jbm050690@gmail.com",
    instagramUsername: "jamshiddinbabajonov",
    linkedinUsername: "jamshiddin-babajonov-168705382",
    githupUsername: "jama050690",
    images,
  });
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
