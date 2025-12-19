// expressni chaqirishh
import express from "express";
// Fs chaqirdim
import fs from "node:fs/promises";

// Server yaratish express orqali
const server = express();
// exress orqali jsonga parselash
server.use(express.json());

// Talabalar.json faylni o'qisb olish va ma'lumot uzatish
async function readTalabalar() {
  const data = await fs.readFile("public/talabalar.json", "utf8");
  return JSON.parse(data);
}

async function writeTalabalar(data) {
  await fs.writeFile("public/talabalar.json", JSON.stringify(data, null, 2));
}

// Avto id berish funksiyasi
function generateID() {
  let maxID = 0;

  for (let id in talabalar) {
    maxID = Math.max(maxID, talabalar[id].id);
  }

  return maxID + 1;
}

// In-memory database (API uchun)
const talabalar = {};

// GET hamma talabalarni chaqrish (public/talabalar.json dan)
server.get("/talabalar.json", async (req, res) => {
  try {
    const data = await fs.readFile("public/talabalar.json", "utf8");
    res.json(JSON.parse(data));
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: "talabalar.json topilmadi" });
  }
});

// GET talabani id orqali chaqirish
server.get("/api/talabalar/:id", (req, res) => {
  const id = req.params.id;
  const talaba = talabalar[id];

  if (!talaba) {
    return res.status(404).json({ error: "talaba not found" });
  }

  res.json(talaba);
});

// CREATE  metodi orqali  talaba ma'lumotini butunlay yaratish
server.post("/api/talabalar", async (req, res) => {
  try {
    const error = validateTalaba(req.body);
    if (error) {
      return res.status(400).json({ error });
    }

    //  Fayldan o‘qiymiz
    const talabalar = await readTalabalar();

    //  Avto ID
    const newId = talabalar.length ? talabalar[talabalar.length - 1].id + 1 : 1;

    //  Yangi talaba
    const newTalaba = { id: newId, ...req.body };

    // Array’ga qo‘shamiz
    talabalar.push(newTalaba);

    //  Faylga yozamiz
    await writeTalabalar(talabalar);

    res.status(201).json(newTalaba);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

//  PUT metodi orqali id topilgan talaba ma'lumotini butunlay o'zgartirish
server.put("/api/talabalar/:id", (req, res) => {
  const id = req.params.id;

  if (!talabalar[id]) {
    return res.status(404).json({ error: "talaba not found" });
  }

  const error = validateTalaba(req.body);
  if (error) {
    return res.status(400).json({ error });
  }

  talabalar[id] = { id: Number(id), ...req.body };
  res.json(talabalar[id]);
});

//  PATCH metodi orqali id topilgan talaba ma'lumotini ma'lum bir qismini o'zgartirish
server.patch("/api/talabalar/:id", (req, res) => {
  const id = req.params.id;

  if (!talabalar[id]) {
    return res.status(404).json({ message: "talaba not found" });
  }

  Object.assign(talabalar[id], req.body);

  res.json({
    message: "talaba updated",
    talaba: talabalar[id],
  });
});

//  DELETE metodi orqali id topilgan talaba ma'lumotini butunlay o'chirish
server.delete("/api/talabalar/:id", (req, res) => {
  const id = req.params.id;

  if (!talabalar[id]) {
    return res.status(404).json({ message: "talaba not found" });
  }

  delete talabalar[id];

  res.json({ message: "talaba deleted successfully" });
});

// Qo'shimcha routlar uchun
//  Guruh bo'yicha talabalarni filtrlash
server.get("/api/talabalar", (req, res) => {
  const { guruh, kurs, sort, otlichniklar } = req.query;

  let result = Object.values(talabalar);

  if (guruh) {
    result = result.filter((t) => t.guruh === guruh);
  }

  if (kurs) {
    result = result.filter((t) => t.kurs == kurs);
  }

  if (otlichniklar === "true") {
    result = result.filter((t) => t.ball > 60);
  }

  if (sort === "ball") {
    result.sort((a, b) => a.ball - b.ball);
  }

  res.json(result);
});

// VALIDATION
function validateTalaba(data) {
  const { ism, familiya, yosh, kurs, ball } = data;

  if (!ism || !familiya) {
    return "Ism va familiya bo‘sh bo‘lmasligi kerak";
  }

  if (yosh < 16 || yosh > 30) {
    return "Yosh 16–30 oralig‘ida bo‘lishi kerak";
  }

  if (kurs < 1 || kurs > 4) {
    return "Kurs 1–4 oralig‘ida bo‘lishi kerak";
  }

  if (ball < 0 || ball > 100) {
    return "Ball 0–100 oralig‘ida bo‘lishi kerak";
  }

  return null;
}

// Server posti va API si
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
