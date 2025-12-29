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

app.use(`/images`, express.static(`public/../images`));
app.use(`/assets`, express.static(`public/../assets`));
app.get("/index.html", async (req, res) => {
  const home = await fs.readFile("./assets/index.html", "utf8");
  const result = ejs.render(home, {
    title: "Welcome to our website!",
    projectName: "My Gallery",
    descreption: "The next level image gallery",
    emailUsername: "jbm050690@gmail.com",
    images,
  });
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
