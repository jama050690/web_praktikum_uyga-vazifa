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
  // console.log(users.length);

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

app.get("/chat-users", authUserMiddleWare, (req, res) => {
  const me = req.user.username;

  let chats = [];
  try {
    chats = JSON.parse(fs.readFileSync(CHAT_FILE, "utf8"));
  } catch {
    chats = [];
  }

  // faqat menga tegishli chatlar
  const myChats = chats.filter((c) => c.user1 === me || c.user2 === me);

  // chat list
  const chatUsers = myChats.map((c) => {
    const otherUser = c.user1 === me ? c.user2 : c.user1;

    return {
      chatId: c.chatId,
      username: otherUser,
      lastMessage: c.text,
      lastMessageTime: c.lastMessageTime,
      lastUser: c.lastUser,
    };
  });

  res.json(chatUsers);
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
  let chats = [];

  try {
    messages = JSON.parse(fs.readFileSync(MESSAGES_FILE, "utf8"));
  } catch {
    messages = [];
  }

  try {
    chats = JSON.parse(fs.readFileSync(CHAT_FILE, "utf8"));
  } catch {
    chats = [];
  }

  //  chat topish
  let chat = chats.find(
    (c) =>
      (c.user1 === from && c.user2 === to) ||
      (c.user1 === to && c.user2 === from)
  );

  // 🆕 chat yo‘q bo‘lsa — yaratamiz
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

  // 📨 yangi message
  const newMessage = {
    id: messages.length ? Math.max(...messages.map((m) => m.id)) + 1 : 1,
    chatId: chat.chatId,
    from,
    to,
    text,
    created_at: new Date().toISOString(),
  };

  messages.push(newMessage);

  // 🔄 chatni update qilamiz
  chat.lastMessage = text;
  chat.lastMessageTime = newMessage.created_at;
  chat.lastUser = from;

  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));
  fs.writeFileSync(CHAT_FILE, JSON.stringify(chats, null, 2));

  res.status(201).json(newMessage);
});

// user online bo‘ldi
app.post("/status/online", (req, res) => {
  res.json({ ok: true });
});
// user offline bo‘ldi
app.post("/status/offline", authUserMiddleWare, (req, res) => {
  const username = req.user.username;
  const statuses = readStatus();

  if (statuses[username]) {
    statuses[username].online = false;
    statuses[username].lastSeen = new Date().toISOString();
  }

  writeStatus(statuses);
  res.json({ ok: true });
});

app.get("/users/:username/status", (req, res) => {
  let statuses = {};

  try {
    // faylni xavfsiz o‘qish
    if (fs.existsSync(USER_STATUS_FILE)) {
      const raw = fs.readFileSync(USER_STATUS_FILE, "utf8");
      statuses = raw ? JSON.parse(raw) : {};
    }
  } catch (err) {
    console.error("STATUS FILE READ ERROR:", err);
    // ❗ bu yerda 500 qaytarmaymiz
    return res.json({ online: false, lastSeen: null });
  }

  const { username } = req.params;

  // agar user yo‘q bo‘lsa — bu XATO EMAS
  if (!statuses[username]) {
    return res.json({ online: false, lastSeen: null });
  }

  return res.json(statuses[username]);
});

// start server
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
