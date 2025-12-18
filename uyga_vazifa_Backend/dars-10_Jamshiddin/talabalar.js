// expressni chaqirishh
import express from "express";

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

// Server posti va API si
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
