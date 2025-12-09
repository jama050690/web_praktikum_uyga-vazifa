import * as http from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const CONTENT_TYPE = { "Content-Type": "application/json" };

function sendJson(res, status, data) {
  res.writeHead(status, CONTENT_TYPE);
  res.end(JSON.stringify(data));
}

const routes = {
  "/posts": path.join(__dirname, "json_endpoints", "posts.json"),
  "/comments": path.join(__dirname, "json_endpoints", "comments.json"),
  "/alboms": path.join(__dirname, "json_endpoints", "alboms.json"),
  "/todos": path.join(__dirname, "json_endpoints", "todos.json"),
  "/photos": path.join(__dirname, "json_endpoints", "photos.json"),
  "/users": path.join(__dirname, "json_endpoints", "users.json"),
};

const server = http.createServer(async (req, res) => {
  let cleanUrl = req.url.split("?")[0].replace(/\/+$/, "");
  let routeFile = routes[cleanUrl];

  if (!routeFile) {
    const parts = cleanUrl.split("/");
    if (parts.length === 3) {
      const endpoint = "/" + parts[1];
      const id = Number(parts[2]);

      if (routes[endpoint]) {
        routeFile = routes[endpoint];
        req.itemId = id;
      }
    }
  }

  if (!routeFile) {
    return sendJson(res, 404, { error: "Page not found" });
  }
  if (req.method === "GET") {
    try {
      const data = await readFile(routeFile, "utf8");
      const arr = JSON.parse(data);

      if (req.itemId) {
        const item = arr.find((u) => Number(u.id) === req.itemId);

        if (!item) return sendJson(res, 404, { error: "Item not found" });

        return sendJson(res, 200, item);
      }

      return sendJson(res, 200, arr);
    } catch (err) {
      return sendJson(res, 500, { error: "Server error" });
    }
  }

  if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => (body += chunk.toString()));

    req.on("end", async () => {
      if (!body.trim()) {
        return sendJson(res, 400, { error: "Empty JSON body" });
      }

      let newData;
      try {
        newData = JSON.parse(body);
      } catch {
        return sendJson(res, 400, { error: "Invalid JSON format" });
      }

      let fileData = [];
      try {
        const json = await readFile(routeFile, "utf8");
        fileData = JSON.parse(json);
      } catch {
        fileData = [];
      }

      fileData.push(newData);
      await writeFile(routeFile, JSON.stringify(fileData, null, 2));

      return sendJson(res, 201, { message: "Saved!", data: newData });
    });

    return;
  }

  return sendJson(res, 405, { error: "Method not allowed" });
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Server ready at http://127.0.0.1:${PORT}`);
});
