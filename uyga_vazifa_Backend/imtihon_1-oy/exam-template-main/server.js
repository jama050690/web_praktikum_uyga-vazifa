import express from "express";
import ejs from "ejs";
import { promises as fs } from "fs";

const app = express();
const PORT = 3000;

//  STATIC
app.use("/img", express.static("img"));
app.use("/css", express.static("css"));
app.use("/js", express.static("js"));
app.use("/lib", express.static("lib"));

// DATA
const tableData = [
  { scope: "#", first: "First Name", last: "Last Name", email: "Email" },
  {
    scope: 1,
    first: "Jamshiddin",
    last: "Babajonov",
    email: "jbm050690@mail.com",
  },
  { scope: 2, first: "Tolmas", last: "O'rinov", email: "o'rinov_007@mail.com" },
  {
    scope: 3,
    first: "Sardor",
    last: "Sunnatullayev",
    email: "sador_05_02@mail.com",
  },
];

//  PAGES
app.get("/signin", async (req, res) => {
  const view = await fs.readFile("./signin.html", "utf8");
  const html = ejs.render(view, {
    projectName: "My Project",
    userName: "Jamshiddin",
  });
  res.send(html);
});

app.get("/signup", async (req, res) => {
  const view = await fs.readFile("./signup.html", "utf8");
  const html = ejs.render(view, {
    projectName: "My Project",
    userName: "Jamshiddin",
  });
  res.send(html);
});

app.get("/404", async (req, res) => {
  const view = await fs.readFile("./404.html", "utf8");
  const html = ejs.render(view, {
    projectName: "My Project",
    userName: "Jamshiddin",
  });
  res.send(html);
});
app.get("/chart", async (req, res) => {
  const view = await fs.readFile("./chart.html", "utf8");
  const html = ejs.render(view, {
    projectName: "My Project",
    userName: "Jamshiddin",
  });
  res.send(html);
});

app.get("/chart", async (req, res) => {
  const view = await fs.readFile("./chart.html", "utf8");
  const html = ejs.render(view, {
    projectName: "My Project",
    userName: "Jamshiddin",
  });
  res.send(html);
});

app.get("/blank", async (req, res) => {
  const view = await fs.readFile("./blank.html", "utf8");
  const html = ejs.render(view, {
    projectName: "My Project",
    userName: "Jamshiddin",
  });
  res.send(html);
});

app.get("/widget", async (req, res) => {
  const view = await fs.readFile("./widget.html", "utf8");
  const html = ejs.render(view, {
    projectName: "My Project",
    userName: "Jamshiddin",
  });
  res.send(html);
});

app.get("/table", async (req, res) => {
  const view = await fs.readFile("./table.html", "utf8");
  const html = ejs.render(view, {
    projectName: "My Project",
    userName: "Jamshiddin",
    table: tableData,
  });
  res.send(html);
});

app.get("/index", async (req, res) => {
  const view = await fs.readFile("./index.html", "utf8");
  const html = ejs.render(view, {
    projectName: "My Project",
    userName: "Jamshiddin",
    table: tableData,
  });
  res.send(html);
});

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
