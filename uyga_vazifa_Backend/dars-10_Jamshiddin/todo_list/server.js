import express from "express";
import fs from "node:fs/promises";

const server = express();
server.use(express.json());

const DB_FILE = "todo_list/vazifalar.json";

/*Faylni o'qib olish funksiyasi */

async function readTodo() {
  try {
    const data = await fs.readFile(DB_FILE, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeTodo(data) {
  await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2));
}

// Avto id berish funksiyasi
function generateID(items) {
  return items.length ? Math.max(...items.map((i) => i.id)) + 1 : 1;
}

// /*Validation funksiyasi */

function validateTodo(data, isPatch = false) {
  //  Sarlavha
  if (!isPatch && (!data.sarlavha || data.sarlavha.trim().length < 3)) {
    return "Sarlavha bo'sh bo'lmasligi kerak";
  }

  // Status
  const allowedStatus = ["yangi", "jarayonda", "tugallangan"];
  if ("status" in data && !allowedStatus.includes(data.status)) {
    return "Status faqat belgilangan qiymatlardan biri bo'lishi kerak";
  }

  //  Muddat
  if ("muddat" in data) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const deadline = new Date(data.muddat);
    if (isNaN(deadline.getTime()) || deadline < today) {
      return "Muddat bugungi sanadan kichik bo'lmasligi kerak";
    }
  }

  return null;
}

// /* QO‘SHIMCHA ROUTELAR */
// server.get("/api/vazifalar/tugagan", async (req, res) => {
//   const items = await readTodo();
//   const tugaganlar = items.filter((m) => Number(m.miqdor) === 0);

//   res.json(tugaganlar);
// });

// /** ENG QIMMAT 5 TA */
// server.get("/api/to_do/eng-qimmat", async (req, res) => {
//   const items = await readTodo();

//   const result = [...items].sort((a, b) => b.narx - a.narx).slice(0, 5);

//   res.json(result);
// });

/* CRUD */

/** BARCHA vazifalar + FILTER */
server.get("/vazifalar", async (req, res) => {
  try {
    const data = await fs.readFile("todo_list/vazifalar.json", "utf8");
    res.json(JSON.parse(data));
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: "vazifalar.json topilmadi" });
  }
});

/** BITTA MAHSULOT (ID) */
server.get("/api/vazifalar/:id", async (req, res) => {
  const items = await readTodo();
  const item = items.find((m) => m.id === Number(req.params.id));

  if (!item) return res.status(404).json({ message: "Mahsulot topilmadi" });

  res.json(item);
});

/** CREATE */
server.post("/api/vazifalar", async (req, res) => {
  const error = validateTodo(req.body);
  if (error) return res.status(400).json({ error });

  const items = await readTodo();

  const newItem = {
    id: generateID(items),
    ...req.body,
  };

  items.push(newItem);
  await writeTodo(items);

  res.status(201).json(newItem);
});

/** UPDATE (PUT) */
server.put("/api/vazifalar/:id", async (req, res) => {
  const error = validateTodo(req.body);
  if (error) return res.status(400).json({ error });

  const items = await readTodo();
  const index = items.findIndex((m) => m.id === Number(req.params.id));

  if (index === -1)
    return res.status(404).json({ message: "Mahsulot topilmadi" });

  items[index] = { id: items[index].id, ...req.body };
  await writeTodo(items);

  res.json(items[index]);
});

server.patch("/api/vazifalar/:id", async (req, res) => {
  const error = validateTodo(req.body, true);
  if (error) return res.status(400).json({ error });

  const items = await readTodo();
  const index = items.findIndex((m) => m.id === Number(req.params.id));

  if (index === -1)
    return res.status(404).json({ message: "Vazifa topilmadi" });

  items[index] = {
    ...items[index],
    ...req.body,
    id: items[index].id,
  };

  await writeTodo(items);
  res.json(items[index]);
});

/** DELETE */
server.delete("/api/vazifalar/:id", async (req, res) => {
  const items = await readTodo();
  const index = items.findIndex((m) => m.id === Number(req.params.id));

  if (index === -1)
    return res.status(404).json({ message: "Vazifa topilmadi" });

  const deleted = items.splice(index, 1)[0];
  await writeTodo(items);

  res.json(deleted);
});

/*  SERVER  */

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
