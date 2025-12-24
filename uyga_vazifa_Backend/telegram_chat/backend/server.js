import express from "express";
import fs from "node:fs";
import cors from "cors";

const app = express();
const PORT = 3000;
const USERS_FILE = "./users.json";

/* ================= MIDDLEWARE ================= */
app.use(
  cors({
    origin: ["http://127.0.0.1:5500", "http://localhost:5500"],
  })
);
app.use(express.json());

/* ================= LOAD USERS (DB) ================= */
let users = {};

try {
  const data = fs.readFileSync(USERS_FILE, "utf8");
  users = JSON.parse(data);
} catch {
  users = {};
}

/* ================= HELPERS ================= */
function saveUsers() {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

function generateID() {
  return Math.max(0, ...Object.values(users).map((u) => u.id || 0)) + 1;
}

/* ================= REGISTER ================= */
app.post("/signup", (req, res) => {
  const { username, email, password, gender = "male" } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "Barcha maydonlar majburiy",
    });
  }

  if (users[username]) {
    return res.status(400).json({
      message: "Bu username allaqachon mavjud",
    });
  }

  const newUser = {
    id: generateID(),
    username,
    email,
    password,
    gender,
  };

  users[username] = newUser;
  saveUsers();

  res.status(201).json({
    message: "Ro'yxatdan o'tildi",
    user: newUser,
  });
});

/* ================= LOGIN ================= */
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = Object.values(users).find((u) => u.email === email);

  if (!user) {
    return res.status(404).json({
      message: "Foydalanuvchi topilmadi",
    });
  }

  if (user.password !== password) {
    return res.status(401).json({
      message: "Parol notog'ri",
    });
  }

  res.json({
    message: "Login muvaffaqiyatli",
    user,
  });
});

/* ================= USERS LIST (CHAT UCHUN) ================= */
app.get("/users", (req, res) => {
  res.json(users);
});

/* ================= START SERVER ================= */
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});

/* ================= EXPORT DEFAULT ================= */
export default app;
