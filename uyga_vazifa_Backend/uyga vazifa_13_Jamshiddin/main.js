import { promises as fs } from "fs";
import express from "express";
import ejs from "ejs";

const app = express();

app.get("/index.html", async (req, res) => {
  const template = await fs.readFile("./src/index.html", "utf8");

  // 1-vazifa: loop
  const courses = ["Java", "Node", "React"];

  // 2-vazifa: rang
  const score = 78;

  // 3-vazifa: real data
  const users = [
    { id: 1, name: "Ali", age: 20 },
    { id: 2, name: "Vali", age: 25 },
    { id: 3, name: "Sami", age: 18 },
  ];

  const html = ejs.render(template, {
    courses,
    score,
    users,
  });

  res.send(html);
});

app.get("/css/:filename", async (req, res) => {
  const css = await fs.readFile(`./css/${req.params.filename}`, "utf8");
  res.type("css").send(css);
});

app.listen(3000, () => console.log("Server running on 3000"));
