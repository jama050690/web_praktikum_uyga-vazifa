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
  console.log(new Date(), "Auth middleware check in progress...");

  const authHeader = req.headers.authorization;

  // 1️⃣ Token bormi?
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  // 2️⃣ Bearer token
  const [type, token] = authHeader.split(" ");
  if (type !== "Bearer" || !token) {
    return res.status(401).json({ message: "Invalid token format" });
  }

  // 3️⃣ Token strukturasi
  const tokenParts = token.split("Valid_until&&");
  if (tokenParts.length !== 2) {
    return res.status(401).json({ message: "Invalid token structure" });
  }

  // 4️⃣ Token muddati
  const expiryDate = new Date(tokenParts[1]);
  if (new Date() > expiryDate) {
    return res.status(401).json({ message: "Token expired" });
  }

  // 5️⃣ Username olish
  const usernameMatch = token.match(/Token_for_(.*?)@/);
  if (!usernameMatch) {
    return res.status(401).json({ message: "Invalid token user" });
  }

  const username = usernameMatch[1];

  // 6️⃣ Users fayldan o‘qish (MUHIM QISM)
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

  // 7️⃣ req.user
  req.user = loggedInUser;
  next();
}

export default authUserMiddleWare;
