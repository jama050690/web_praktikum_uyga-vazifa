import * as http from "node:http";
import * as fs from "node:fs";

const PORT = 3000;
const USERS_FILE = "./users_telegram/users.json";
function corsLoggerMiddleware(req, res, next) {
  const { origin } = req.headers;

  console.log("URL:", req.url);

  const allowedOrigins = ["http://127.0.0.1:5500", "http://localhost:5500"];

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  next();
}

let users = {};

try {
  const data = fs.readFileSync(USERS_FILE, "utf8");
  users = JSON.parse(data);
} catch {
  users = {};
}

function saveUsers() {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

function generateID() {
  let maxID = 0;
  for (let username in users) {
    maxID = Math.max(maxID, users[username].id);
  }
  return maxID + 1;
}

function bodyParser(req, res, next) {
  let body = "";

  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => {
    if (body) {
      try {
        req.body = JSON.parse(body);
      } catch {
        res.writeHead(400);
        return res.end("Invalid JSON");
      }
    }
    next(req, res);
  });
}

const server = http.createServer((req, res) => {
  corsLoggerMiddleware(req, res, () => {
    bodyParser(req, res, handleServer);
  });
});

function handleServer(req, res) {
  if (req.url === "/users") {
    // GET
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(users));
    }

    // POST
    if (req.method === "POST") {
      const { username, gender, password, email } = req.body || {};

      if (!username) {
        res.writeHead(400);
        return res.end("username required");
      }

      if (users[username]) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "User already exists" }));
      }

      const newUser = {
        id: generateID(),
        username,
        gender,
        password,
        email,
      };

      users[username] = newUser;
      saveUsers();

      res.writeHead(201, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(newUser));
    }

    // PATCH
    if (req.method === "PATCH") {
      const { username, key, value } = req.body || {};

      if (!["gender", "email", "password"].includes(key)) {
        res.writeHead(400);
        return res.end("Invalid field");
      }

      users[username][key] = value;
      saveUsers();

      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(users[username]));
    }

    // DELETE
    if (req.method === "DELETE") {
      const { username } = req.body || {};

      if (!users[username]) {
        res.writeHead(404);
        return res.end("User not found");
      }

      const deleted = users[username];
      delete users[username];
      saveUsers();

      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(deleted));
    }

    res.writeHead(405);
    return res.end("Method Not Allowed");
  }

  /*  /users/:username */
  if (req.url.startsWith("/users/")) {
    const username = req.url.split("/")[2];

    if (!users[username]) {
      res.writeHead(404);
      return res.end("User not found");
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(users[username]));
  }

  res.writeHead(404);
  res.end("Not Found");
}

server.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
