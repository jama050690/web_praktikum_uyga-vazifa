import express from "express";
import fs from "node:fs";
import cors from "cors";
import path from "path";
import authUserMiddleWare from "./modules/middlewares.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, "assets");
const USERS_FILE = path.join(ASSETS_DIR, "users.json");
const USER_IDS_FILE = path.join(ASSETS_DIR, "user_id_list.json");
const MESSAGES_FILE = path.join(ASSETS_DIR, "messages.json");
const CHAT_FILE = path.join(ASSETS_DIR, "chats.json");
const USER_STATUS_FILE = path.join(ASSETS_DIR, "user_status_jama.json");

const app = express();
const PORT = 3000;
let users = [];
let user_id_list = {};

app.use(
  cors({
    origin: ["http://127.0.0.1:5500", "http://127.0.0.1:5501"],
  })
);
app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend")));

// ============== FUNCTIONS ==============

function saveUsers() {
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
  return `Token_for_${username}@from&${new Date().toISOString()}.Valid_until&&${formatted_date}`;
}

// ================= STATUS STORE =================
// (yangi qo‘shildi, lekin eski kommentlarga tegilmadi)

function readStatus() {
  if (!fs.existsSync(USER_STATUS_FILE)) return {};
  const raw = fs.readFileSync(USER_STATUS_FILE, "utf8");
  return raw ? JSON.parse(raw) : {};
}

function writeStatus(data) {
  fs.writeFileSync(USER_STATUS_FILE, JSON.stringify(data, null, 2));
}

// ================= LOAD USERS =================

try {
  users = JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));
  user_id_list = JSON.parse(fs.readFileSync(USER_IDS_FILE, "utf8"));
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
    return res.status(400).json({ message: "Barcha maydonlar majburiy" });
  }

  let username = name.split(" ").join("").toLowerCase();

  if (users.find((u) => u.username === username)) {
    return res.status(400).json({ message: "Bu username allaqachon mavjud" });
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

  res.status(201).json({ message: "Ro'yxatdan o'tildi" });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);
  if (!user)
    return res.status(404).json({ message: "Foydalanuvchi topilmadi" });
  if (user.password !== password)
    return res.status(401).json({ message: "Parol notog'ri" });

  const token = generate_token(user.username);

  // user online bo‘ldi
  const statuses = readStatus();
  statuses[user.username] = {
    online: true,
    lastSeen: null,
  };

  writeStatus({
    ...statuses,
    [user.username]: {
      online: true,
      lastSeen: new Date().toISOString(),
    },
  });
  res.json({
    access_token: token,
    user: {
      username: user.username,
      name: user.name,
      email: user.email,
    },
  });
});
app.get("/users", authUserMiddleWare, (req, res) => {
  const me = req.user.username;
  res.json(users.filter((u) => u.username !== me));
});

app.get("/chat-users", authUserMiddleWare, (req, res) => {
  const me = req.user.username;

  let chats = [];
  try {
    chats = JSON.parse(fs.readFileSync(CHAT_FILE, "utf8"));
  } catch {}

  const myChats = chats.filter((c) => c.user1 === me || c.user2 === me);

  const chatUsers = myChats.map((c) => ({
    chatId: c.chatId,
    username: c.user1 === me ? c.user2 : c.user1,
    lastMessage: c.lastMessage,
    lastMessageTime: c.lastMessageTime,
    lastUser: c.lastUser,
  }));

  res.json(chatUsers);
});

app.get("/messages", authUserMiddleWare, (req, res) => {
  const { username, with: withUser } = req.query;

  let messages = [];
  let chats = [];
  try {
    chats = JSON.parse(fs.readFileSync(CHAT_FILE, "utf8"));
    messages = JSON.parse(fs.readFileSync(MESSAGES_FILE, "utf8"));
  } catch {}

  const chat = chats.find(
    (c) =>
      (c.user1 === username && c.user2 === withUser) ||
      (c.user1 === withUser && c.user2 === username)
  );

  if (!chat) return res.json([]);

  res.json(messages.filter((m) => m.chatId === chat.chatId));
});

app.post("/messages", authUserMiddleWare, (req, res) => {
  const { to, text } = req.body;
  const from = req.user.username;

  let messages = [];
  let chats = [];

  try {
    messages = JSON.parse(fs.readFileSync(MESSAGES_FILE, "utf8"));
  } catch {}

  try {
    chats = JSON.parse(fs.readFileSync(CHAT_FILE, "utf8"));
  } catch {}

  let chat = chats.find(
    (c) =>
      (c.user1 === from && c.user2 === to) ||
      (c.user1 === to && c.user2 === from)
  );

  if (!chat) {
    chat = {
      chatId: chats.length ? Math.max(...chats.map((c) => c.chatId)) + 1 : 1,
      user1: from,
      user2: to,
      lastMessage: "",
      lastMessageTime: null,
      lastUser: null,
    };
    chats.push(chat);
  }

  const newMessage = {
    id: messages.length ? Math.max(...messages.map((m) => m.id)) + 1 : 1,
    chatId: chat.chatId,
    from,
    to,
    text,
    created_at: new Date().toISOString(),
  };

  messages.push(newMessage);

  chat.lastMessage = text;
  chat.lastMessageTime = newMessage.created_at;
  chat.lastUser = from;

  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));
  fs.writeFileSync(CHAT_FILE, JSON.stringify(chats, null, 2));

  res.status(201).json(newMessage);
});

// user offline bo‘ldi
app.post("/status/offline", (req, res) => {
  const { username } = req.body;
  if (!username) return res.json({ ok: true });

  const statuses = readStatus();
  statuses[username] = {
    online: false,
    lastSeen: new Date().toISOString(),
  };
  writeStatus(statuses);

  res.json({ ok: true });
});

app.get("/users/:username/status", (req, res) => {
  const statuses = readStatus();
  const status = statuses[req.params.username];

  if (!status) {
    return res.json({ online: false, lastSeen: null });
  }

  res.json(status);
});

// start server
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
