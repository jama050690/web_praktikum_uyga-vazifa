import express from "express";
import fs from "node:fs";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, "assets");
const USERS_FILE = path.join(ASSETS_DIR, "users.json");
const USER_IDS_FILE = path.join(ASSETS_DIR, "user_id_list.json");
const MESSAGES_FILE = path.join(ASSETS_DIR, "messages.json");
const CHAT_FILE = path.join(ASSETS_DIR, "chats.json");

const app = express();
const PORT = 3000;
let users = [];
let user_id_list = {};

app.use(
  cors({
    origin: ["http://127.0.0.1:5500", "http://localhost:5500"],
  })
);
app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend")));

// ============== FUNCTIONS ==============

/**
 * Foydalanuvchilarni haqiqiyligini tekshirish (authentication)
 * So'rovga login qilgan foydalanuvchi obyektini bog`lash (req.user)
 * Agar token yoki foydalanuvchi haqiqiy bo`lmasa xatolik qaytarsin
 * @param {*} req so'rov
 * @param {*} res javob
 * @param {*} next callback funksiya
 * @returns
 */
function authUserMiddleWare(req, res, next) {
  // token muddati tugamaganligi logikasi
  console.log(new Date() + ", Auth middleware check in progress...");
  const authHeader = req.headers.authorization;

  // console.log(authHeader);

  // 1. Token bormi?
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1]; // Bearer <token>
  // console.log("token: ", token);

  // tokenni tekshirish
  if (!token) {
    return res.status(401).json({ message: "Invalid token format" });
  }

  // token haqiqiyligini tekshirish 2-qism
  const tokenParts = token.split("Valid_until&&");
  if (tokenParts.length !== 2) {
    return res.status(401).json({ message: "Invalid token structure" });
  }

  // token muddati o'tib ketmaganmi?
  const expiryDate = new Date(tokenParts[1]);
  if (new Date() > expiryDate) {
    return res.status(401).json({ message: "Token expired" });
  }

  // user haqiqiyligini tekshirish logikasi
  const usernameMatch = token.match(/Token_for_(.*?)@/);
  if (!usernameMatch) {
    return res.status(401).json({ message: "Invalid token user" });
  }
  // console.log(usernameMatch);

  // username ni olish 1-qism
  const username = usernameMatch[1];

  //  user mavjud ekanini tekshirish 2-qism
  const loggedInUser = users.find((u) => u.username === username);

  if (!loggedInUser) {
    return res.status(401).json({ message: "User does not exist" });
  }

  // request ga user hossasiga foydalanuvchi obyektini qo'shish
  req.user = loggedInUser;

  // console.log("req data: ", req);

  next(); // keyingi funksiyaga o'tish
}

function saveUsers() {
  console.log("Users idlist ", user_id_list);
  console.log("Users ", users);

  fs.writeFileSync(USER_IDS_FILE, JSON.stringify(user_id_list, null, 2));
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

function generateID() {
  if (!users.length) return 1;
  return Math.max(...users.map((u) => u.id)) + 1;
}

function generate_token(username) {
  let tomorrow_date = new Date();
  tomorrow_date.setDate(tomorrow_date.getDate() + 1);
  const formatted_date = tomorrow_date.toISOString();
  const token = `Token_for_${username}@from&${new Date().toISOString()}.Valid_until&&${formatted_date}`;
  return token;
}

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

// ============= API endpoints =============
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/aut/login.html"));
});

app.post("/signup", (req, res) => {
  const { name, email, password, gender = "male" } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "Barcha maydonlar majburiy",
    });
  }

  let username;
  const nameStr = name.split(" ");
  if (nameStr.length > 1) {
    username = nameStr.join("");
  } else {
    username = name;
  }

  username = username.toLowerCase();

  if (users.find((u) => u.username === username)) {
    return res.status(400).json({
      message: "Bu username allaqachon mavjud",
    });
  }

  const newUser = {
    id: generateID(),
    username,
    name,
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

  // token yaratish logikasi
  const token = generate_token(user.username);
  // console.log(token);

  res.json({
    message: "Login muvaffaqiyatli",
    user,
    access_token: token,
  });
});

app.get("/users", authUserMiddleWare, (req, res) => {
  const user = req.user;
  const filtered = users.filter((u) => u.username !== user.username);
  res.json(filtered);
});

app.get("/chats", authUserMiddleWare, (req, res) => {
  const { username, with: withUser } = req.query;

  let chats = [];
  try {
    chats = JSON.parse(fs.readFileSync(CHAT_FILE, "utf8"));
  } catch {
    chats = [];
  }

  return res.json(chats);
});

app.get("/messages", authUserMiddleWare, (req, res) => {
  const { username, with: withUser } = req.query;

  // console.log(`/messages API chaqirildi, from: ${username}, to: ${withUser}`);

  let messages = [];
  let chats = [];
  try {
    chats = JSON.parse(fs.readFileSync(CHAT_FILE, "utf8"));
    messages = JSON.parse(fs.readFileSync(MESSAGES_FILE, "utf8"));
  } catch {
    messages = [];
    chats = [];
  }

  // console.log(chats.length);

  const chat = chats.filter(
    (ch) =>
      (ch.user1 === username && ch.user2 === withUser) ||
      (ch.user1 === withUser && ch.user2 === username)
  );

  const chatId = chat.length > 0 ? chat[0].chatId : undefined;
  // console.log("chat: ", chatId);

  const filtered = messages.filter((m) => m.chatId === chatId);
  // console.log("msg: ", filtered);

  return res.json(filtered);
});

app.post("/messages", authUserMiddleWare, (req, res) => {
  const { to, text } = req.body;
  const from = req.user.username;

  if (!to || !text) {
    return res.status(400).json({ message: "Recipient and text required" });
  }

  let messages = [];
  try {
    messages = JSON.parse(fs.readFileSync(MESSAGES_FILE, "utf8"));
  } catch {
    messages = [];
  }

  const newMessage = {
    id: messages.length ? Math.max(...messages.map((m) => m.id)) + 1 : 1,
    from,
    to,
    text,
    created_at: new Date().toISOString(),
  };

  messages.push(newMessage);
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));

  res.status(201).json(newMessage);
});

// start server
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
