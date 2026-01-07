import fs from "node:fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const USERS_FILE = path.join(__dirname, "../assets/users.json");

/**
 * Foydalanuvchilarni haqiqiyligini tekshirish (authentication)
 * So'rovga login qilgan foydalanuvchi obyektini bog`lash (req.user)
 * Agar token yoki foydalanuvchi haqiqiy bo`lmasa xatolik qaytarsin
 * @param {*} req so'rov
 * @param {*} res javob
 * @param {*} next callback funksiya
 * @returns
 **/
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

  // 6️ Users fayldan o‘qish (MUHIM QISM)
  let users = [];
  try {
    users = JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));
  } catch (err) {
    return res.status(500).json({ message: "Users file read error" });
  }

  const loggedInUser = users.find((u) => u.username === username);
  if (!loggedInUser) {
    return res.status(401).json({ message: "User does not exist" });
  }

  // request ga user hossasiga foydalanuvchi obyektini qo'shish
  req.user = loggedInUser;

  // console.log("req data: ", req);

  next(); // keyingi funksiyaga o'tish
}

export default authUserMiddleWare;
