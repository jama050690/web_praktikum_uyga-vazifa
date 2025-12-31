import express from "express";
import ejs from "ejs";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ROUTE
app.get("/index.html", async (req, res) => {
  try {
    const filePath = path.join(__dirname, "../src/view/index.html");
    const home = await fs.readFile(filePath, "utf8");

    const result = ejs.render(home, {
      title: "Welcome to our website!",
      projectName: "My Gallery",
      descreption: "The next level image gallery",
      telegramUsername: "Jama_9133",
      whatsappUsername: "998957990034",
      emailUsername: "jbm050690@gmail.com",
      instagramUsername: "jamshiddinbabajonov",
      linkedinUsername: "jamshiddin-babajonov-168705382",
      githubUsername: "jama050690",
      images: [],
    });

    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Index file not found");
  }
});
app.get("/index-demo.html", async (req, res) => {
  try {
    const filePath = path.join(__dirname, "../src/view/index-demo.html");
    const home = await fs.readFile(filePath, "utf8");

    const result = ejs.render(home, {
      title: "Welcome to our website!",
      projectName: "My Gallery",
      descreption: "The next level image gallery",
      telegramUsername: "Jama_9133",
      whatsappUsername: "998957990034",
      emailUsername: "jbm050690@gmail.com",
      instagramUsername: "jamshiddinbabajonov",
      linkedinUsername: "jamshiddin-babajonov-168705382",
      githubUsername: "jama050690",
      images: [],
    });

    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Index file not found");
  }
});

app.listen(PORT, () =>
  console.log(`✅ Server running: http://localhost:${PORT}/index.html`)
);
