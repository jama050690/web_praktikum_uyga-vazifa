import express from "express";
import fs from "node:fs";
import cors from "cors";

const app = express();
const PORT = 3000;
const USERS_FILE = "assets/users.json";
const USER_IDS_FILE = "assets/user_id_list.json";

app.use(
  cors({
    origin: ["http://127.0.0.1:5500", "http://localhost:5500"],
  })
);
app.use(express.json());

let users = [];
let user_id_list = {};

try {
  const data = fs.readFileSync(USERS_FILE, "utf8");

  const userIds = fs.readFileSync(USER_IDS_FILE, "utf8");
  users = JSON.parse(data);
  console.log(users.length);

  user_id_list = JSON.parse(userIds);
} catch {
  users = [];
  user_id_list = {};
}

function saveUsers() {
  fs.writeFileSync(USER_IDS_FILE, JSON.stringify(user_id_list, null, 2));
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

function generateID() {
  return Math.max(0, users[users.length - 1].id + 1);
}

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

  users.push(newUser);
  user_id_list[username] = newUser.id;
  saveUsers();

  res.status(201).json({
    message: "Ro'yxatdan o'tildi",
    user: newUser,
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);

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
  let tomorrow_date = new Date();
  tomorrow_date.setDate(tomorrow_date.getDate() + 1);
  const formatted_date = tomorrow_date.toISOString();
  const token = `Token_for_${
    user.username
  }@from&${new Date().toISOString()}. Valid until&&${formatted_date}`;
  console.log(token);

  res.json({
    message: "Login muvaffaqiyatli",
    user,
    access_token: token,
  });
});

app.get("/users", (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];
  if (!token) {
    res.status(401).json({
      message:
        "Unauthorized access. Iltimos, login qilib qayta urinib ko'ring!",
    });
  }
  console.log("mana: ", users.length);

  res.json(users);
});

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
