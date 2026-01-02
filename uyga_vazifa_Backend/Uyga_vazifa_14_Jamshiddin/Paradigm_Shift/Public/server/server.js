import express from "express";
import { promises as fs } from "fs";
import ejs, { name } from "ejs";
const PORT = 3000;
const app = express();
const images = [
  {
    image: {
      full: "images/full/01.jbg",
      thumb: "images/thumb/01.jbg",
    },
    name: "Diam compus accumsan",
    descreption: "lorem in contact is not problem",
  },
];

app.use(`/images`, express.static(`public/images`));
app.use(`/assets`, express.static(`public/assets`));
app.get("/index.html", async (req, res) => {
  const home = await fs.readFile("./public/assets/index.html", "utf8");
  const result = ejs.render(home, {
    title: "Welcome to our website!",
    projectName: "My Gallery",
    descreption: "The next level image gallery",
    telegramUsername: "Jama_9133",
    whatsapUsername: 998957990034,
    emailUsername: "jbm050690@gmail.com",
    instagramUsername: "jamshiddinbabajonov",
    linkedinUsername: "jamshiddin-babajonov-168705382",
    githubUsername: "jama050690",
    images,
    email: "example@gmail.com",
    phoneRaw: "+998957990034",
    phoneDisplay: "(+998) 95 799 00 34",
    address: {
      city: "Toshkent city",
      district: "Chilonzor district",
      details: "Quarter 20, Building 8, Entrance 3, Apartment 31",
    },
  });
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
