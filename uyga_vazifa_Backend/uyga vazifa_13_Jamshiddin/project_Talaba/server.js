import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// EJS (Express 5 avtomatik)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// body parser
app.use(express.urlencoded({ extended: true }));

// static
app.use("/css", express.static(path.join(__dirname, "css")));

// vaqtinchalik DB
const users = [];

// LIST + FORM
app.get("/talabalar", (req, res) => {
  res.render("talabalar", { users });
});

// CREATE
app.post("/talabalar", (req, res) => {
  const { name, age } = req.body;

  if (name?.trim()) {
    users.push({
      id: Date.now(),
      name: name.trim(),
      age: Number(age),
    });
  }

  res.redirect("/talabalar");
});

app.listen(3000, () => {
  console.log("http://127.0.0.1:3000/talabalar");
});
