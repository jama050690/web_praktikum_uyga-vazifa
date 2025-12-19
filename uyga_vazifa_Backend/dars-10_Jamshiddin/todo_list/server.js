import express from "express";
import fs from "node:fs/promises";

const server = express();
server.use(express.json());

const DB_FILE = "todo_list/vazifalar.json";

/*Faylni o'qib olish funksiyasi */

async function readVazifa() {
  try {
    const data = await fs.readFile(DB_FILE, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeVazifa(data) {
  await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2));
}

// Avto id berish funksiyasi
function generateID(items) {
  return items.length ? Math.max(...items.map((i) => i.id)) + 1 : 1;
}

// /*Validation funksiyasi */

function validateTodo(data, isPatch = false) {
  //  Sarlavha
  if (!isPatch && (!data.sarlavha || data.sarlavha.trim().length < 6)) {
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

/* QO‘SHIMCHA ROUTELAR */
server.get("/api/vazifalar", async (req, res) => {
  try {
    const { status, muhimlik } = req.query;
    const vazifalar = await readVazifa();

    let result = vazifalar;

    if (status) {
      result = result.filter((v) => v.status === status);
    }

    if (muhimlik) {
      result = result.filter((v) => v.muhimlik === muhimlik);
    }

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});
// Bugunki vazifalar
server.get("/api/vazifalar/bugun", async (req, res) => {
  try {
    const vazifalar = await readVazifa();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const result = vazifalar.filter((v) => {
      if (!v.muddat) return false;
      const d = new Date(v.muddat);
      d.setHours(0, 0, 0, 0);
      return d.getTime() === today.getTime();
    });

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});
// Kech qolgan vazifalar
server.get("/api/vazifalar/kech-qolgan", async (req, res) => {
  try {
    const vazifalar = await readVazifa();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const result = vazifalar.filter((v) => {
      if (!v.muddat) return false;

      const d = new Date(v.muddat);
      d.setHours(0, 0, 0, 0);

      return d < today && v.status !== "tugallangan";
    });

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Patch statsus
server.patch("/api/vazifalar/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    const allowedStatus = ["yangi", "jarayonda", "tugallangan"];

    if (!allowedStatus.includes(status)) {
      return res.status(400).json({
        error: "Status faqat belgilangan qiymatlardan biri bo'lishi kerak",
      });
    }

    const vazifalar = await readVazifa();
    const index = vazifalar.findIndex((v) => v.id === Number(req.params.id));

    if (index === -1) {
      return res.status(404).json({ message: "Vazifa topilmadi" });
    }

    vazifalar[index].status = status;
    await writeVazifa(vazifalar);

    res.json(vazifalar[index]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

/* CRUD */

/** BARCHA VAZIFALAR */
server.get("/api/vazifalar", async (req, res) => {
  const items = await readVazifa();
  res.json(items);
});

/** BITTA VAZIFA (ID) */
server.get("/api/vazifalar/:id", async (req, res) => {
  const items = await readVazifa();
  const item = items.find((v) => v.id === Number(req.params.id));

  if (!item) {
    return res.status(404).json({ message: "Vazifa topilmadi" });
  }

  res.json(item);
});

/** CREATE */
server.post("/api/vazifalar", async (req, res) => {
  const error = validateTodo(req.body);
  if (error) return res.status(400).json({ error });

  const items = await readVazifa();

  const newItem = {
    id: generateID(items),
    sarlavha: req.body.sarlavha,
    tavsif: req.body.tavsif || "",
    status: req.body.status || "yangi",
    muhimlik: req.body.muhimlik || "o'rta",
    muddat: req.body.muddat,
    yaratilganVaqt: new Date().toISOString(),
  };

  items.push(newItem);
  await writeVazifa(items);

  res.status(201).json(newItem);
});

/** UPDATE (PUT) */
server.put("/api/vazifalar/:id", async (req, res) => {
  const error = validateTodo(req.body);
  if (error) return res.status(400).json({ error });

  const items = await readVazifa();
  const index = items.findIndex((v) => v.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: "Vazifa topilmadi" });
  }

  items[index] = {
    ...items[index],
    ...req.body,
    id: items[index].id,
  };

  await writeVazifa(items);
  res.json(items[index]);
});

/** UPDATE (PATCH) */
server.patch("/api/vazifalar/:id", async (req, res) => {
  const error = validateTodo(req.body, true);
  if (error) return res.status(400).json({ error });

  const items = await readVazifa();
  const index = items.findIndex((v) => v.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: "Vazifa topilmadi" });
  }

  items[index] = {
    ...items[index],
    ...req.body,
    id: items[index].id,
  };

  await writeVazifa(items);
  res.json(items[index]);
});

/** DELETE */
server.delete("/api/vazifalar/:id", async (req, res) => {
  const items = await readVazifa();
  const index = items.findIndex((v) => v.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: "Vazifa topilmadi" });
  }

  const deleted = items.splice(index, 1)[0];
  await writeVazifa(items);

  res.json(deleted);
});

/*  SERVER  */

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
