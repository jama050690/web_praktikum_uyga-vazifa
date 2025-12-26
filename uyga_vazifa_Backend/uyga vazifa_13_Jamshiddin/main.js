import { promises as fs } from "fs";
import express from "express";
import ejs from "ejs";

const app = express();

app.get("/index.html", async (req, res) => {
  let template = await fs.readFile("./src/index.html", "utf8");

  let html = ejs.render(template, {
    courses: ["Java", "Node", "React"],
  });

  res.send(html);
});

app.get("/css/:filename", async (req, res) => {
  const view = await fs.readFile(`./src/css/${req.params.filename}`, "utf8");

  res.set("Content-Type", "text/css");

  res.send(view);
});

app.listen(3000, () => console.log(3000));
