import express from "express";
import fs from "node:fs/promises";

const server = express();
server.use(express.json());

const DB_FILE = "do'kon_api/maxsulotlar.json";

/*Faylni o'qib olish funksiyasi */

async function readMaxsulotlar() {
  try {
    const data = await fs.readFile(DB_FILE, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeMaxsulotlar(data) {
  await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2));
}

// Avto id berish funksiyasi
function generateID(items) {
  return items.length ? Math.max(...items.map((i) => i.id)) + 1 : 1;
}

/*Validation funksiyasi */

function validateMaxsulot(data, isPatch = false) {
  if (!isPatch && (!data.nomi || data.nomi.length < 3))
    return "Nomi kamida 3 ta belgidan iborat bo'lishi kerak";

  if ("narx" in data && (typeof data.narx !== "number" || data.narx <= 0))
    return "Narx 0 dan katta bo'lishi kerak";

  if ("miqdor" in data && (typeof data.miqdor !== "number" || data.miqdor < 0))
    return "Miqdor 0 yoki undan katta bo'lishi kerak";

  if (!isPatch && !data.kategoriya) return "Kategoriya tanlanishi kerak";

  return null;
}

/* QO‘SHIMCHA ROUTELAR */
server.get("/api/mahsulotlar/tugagan", async (req, res) => {
  const items = await readMaxsulotlar();
  const tugaganlar = items.filter((m) => Number(m.miqdor) === 0);

  res.json(tugaganlar);
});

/** ENG QIMMAT 5 TA */
server.get("/api/mahsulotlar/eng-qimmat", async (req, res) => {
  const items = await readMaxsulotlar();

  const result = [...items].sort((a, b) => b.narx - a.narx).slice(0, 5);

  res.json(result);
});

/* CRUD */

/** BARCHA MAHSULOTLAR + FILTER */
server.get("/api/mahsulotlar", async (req, res) => {
  let items = await readMaxsulotlar();

  const { kategoriya, minNarx, maxNarx } = req.query;

  if (kategoriya) {
    items = items.filter((m) => m.kategoriya === kategoriya);
  }

  if (minNarx) {
    items = items.filter((m) => m.narx >= Number(minNarx));
  }

  if (maxNarx) {
    items = items.filter((m) => m.narx <= Number(maxNarx));
  }

  res.json(items);
});

/** BITTA MAHSULOT (ID) */
server.get("/api/mahsulotlar/:id", async (req, res) => {
  const items = await readMaxsulotlar();
  const item = items.find((m) => m.id === Number(req.params.id));

  if (!item) return res.status(404).json({ message: "Mahsulot topilmadi" });

  res.json(item);
});

/** CREATE */
server.post("/api/mahsulotlar", async (req, res) => {
  const error = validateMaxsulot(req.body);
  if (error) return res.status(400).json({ error });

  const items = await readMaxsulotlar();

  const newItem = {
    id: generateID(items),
    ...req.body,
  };

  items.push(newItem);
  await writeMaxsulotlar(items);

  res.status(201).json(newItem);
});

/** UPDATE (PUT) */
server.put("/api/mahsulotlar/:id", async (req, res) => {
  const error = validateMaxsulot(req.body);
  if (error) return res.status(400).json({ error });

  const items = await readMaxsulotlar();
  const index = items.findIndex((m) => m.id === Number(req.params.id));

  if (index === -1)
    return res.status(404).json({ message: "Mahsulot topilmadi" });

  items[index] = { id: items[index].id, ...req.body };
  await writeMaxsulotlar(items);

  res.json(items[index]);
});

server.patch("/api/mahsulotlar/:id", async (req, res) => {
  const error = validateMaxsulot(req.body, true);
  if (error) return res.status(400).json({ error });

  const items = await readMaxsulotlar();
  const index = items.findIndex((m) => m.id === Number(req.params.id));

  if (index === -1)
    return res.status(404).json({ message: "Mahsulot topilmadi" });

  items[index] = {
    ...items[index],
    ...req.body,
    id: items[index].id,
  };

  await writeMaxsulotlar(items);
  res.json(items[index]);
});

/** DELETE */
server.delete("/api/mahsulotlar/:id", async (req, res) => {
  const items = await readMaxsulotlar();
  const index = items.findIndex((m) => m.id === Number(req.params.id));

  if (index === -1)
    return res.status(404).json({ message: "Mahsulot topilmadi" });

  const deleted = items.splice(index, 1)[0];
  await writeMaxsulotlar(items);

  res.json(deleted);
});

/*  SERVER  */

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
