// expressni chaqirishh
import express from "express";
// Fs chaqirdim
import { promises as fs } from "fs";

// Server yaratish express orqali
const server = express();
// exress orqali jsonga parselash
server.use(express.json());

const talabalar = {};
// Avto id berish funksiyasi
function generateID() {
  let maxID = 0;

  for (let id in talabalar) {
    maxID = Math.max(maxID, talabalar[id].id);
  }

  return maxID + 1;
}

// GET hamma talabalarni chaqrish
server.get("/talabalar", (req, res) => {
  res.json(talabalar);
});

// GET talabani id orqali chaqirish
server.get("/talabalar/:id", (req, res) => {
  const id = req.params.id;
  const talaba = talabalar[id];

  if (!talaba) {
    return res.status(404).json({ error: "talaba not found" });
  }

  res.json(talaba);
});

// CREATE  metodi orqali  talaba ma'lumotini butunlay yaratish
server.post("/talabalar", (req, res) => {
  const newId = generateID();

  const newTalaba = {
    id: newId,
    ...req.body,
  };

  talabalar[newId] = newTalaba;

  res.status(201).json(newTalaba);
});

//  PUT metodi orqali id topilgan talaba ma'lumotini butunlay o'zgartirish
server.put("/talabalar/:id", (req, res) => {
  const id = req.params.id;

  if (!talabalar[id]) {
    return res.status(404).json({ error: "talaba not found" });
  }
  talabalar[id] = {
    id,
    ...req.body,
  };

  res.json(talabalar[id]);
});

//  PATCH metodi orqali id topilgan talaba ma'lumotini ma'lum bir qismini o'zgartirish
server.patch("/talabalar/:id", (req, res) => {
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
server.delete("/talabalar/:id", (req, res) => {
  const id = req.params.id;

  if (!talabalar[id]) {
    return res.status(404).json({ message: "talaba not found" });
  }

  delete talabalar[id];

  res.json({ message: "talaba deleted successfully" });
});

// Qo'shimcha routlar uchun
//  Guruh bo'yicha talabalarni filtrlash

app.get("/api/talabalar", (req, res) => {
  const { guruh, kurs, ball } = req.query;

  fs.readFile("./public/talabalar.json", "utf8", (error, data) => {
    if (error) {
      return res.status(404).json({
        message: "Bu fayl mavjud emas",
      });
    }

    let talabalar = JSON.parse(data);

    // Guruh bo‘yicha filter
    if (guruh) {
      talabalar = talabalar.filter((t) => t.guruh === guruh);
    }

    // Kurs bo‘yicha filter
    if (kurs) {
      talabalar = talabalar.filter((t) => t.kurs == kurs);
    }

    res.json(talabalar);
  });
});

//  Ball bo'yicha saralash: /api/talabalar?sort=ball

app.get("/api/talabalar", (req, res) => {
  const { sort } = req.query;

  fs.readFile("./public/talabalar.json", "utf8", (err, data) => {
    if (err) {
      return res.status(404).json({ message: "Fayl topilmadi" });
    }

    let talabalar = JSON.parse(data);

    if (sort === "ball") {
      talabalar.sort((a, b) => a.ball - b.ball);
    }

    res.json(talabalar);
  });
});

// 60 balldan yuqori talabalarni ko'rish: /api/talabalar/otlichniklar

app.get("/api/talabalar", async (req, res) => {
  try {
    const data = await fs.readFile("./public/talabalar.json", "utf8");
    const talabalar = JSON.parse(data);

    res.json(talabalar);
  } catch (err) {
    res.status(404).json({ message: "Fayl topilmadi" });
  }
});

// Server posti va API si
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
