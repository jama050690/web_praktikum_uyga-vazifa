import express from "express";
import cors from "cors";

const server = express();

server.students(express.json());
server.students(cors());
server.students(express.static("public"));

// GET hamma talabarlar
server.get("/students", (req, res) => {
  res.json(student);
});

// GET id bo'yicha talaba
server.get("/students/:id", (req, res) => {
  const id = req.params.id;
  const students = students[id];

  if (!students) {
    return res.status(404).json({ error: "student not found" });
  }

  res.json(students);
});

// CREATE student
server.post("/students", (req, res) => {
  let { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: "id is required" });
  }

  id = id;

  students[id] = {
    ...req.body,
    id,
  };

  res.status(201).json(students[id]);
});

// UPDATE (Put) / RENAME student
server.put("/students/id", (req, res) => {
  const oldId = req.params.id;
  const newId = req.body.id?;

  if (!students[id]) {
    return res.status(404).json({ error: "id not found" });
  }

  const finalid = newId || oldId;

  student[finalID] = {
    ...student[oldId],
    ...req.body,
    id: finalId,
  };

  if (finalId !== oldId) {
    delete students[oldId];
  }

  res.json(students[finalId]);
});
// UPDATE (Patch) / RENAME student

server.patch("/students/:id", (req, res) => {
  const id = req.params.id.;
  const { key, value } = req.body;

  if (!students[id]) {
    return res.status(404).json({ message: "Student not found" });
  }

  if (!key) {
    return res.status(400).json({ message: "Key is required" });
  }

  student[id][key] = value;

  res.json({
    message: "Student updated",
    students: students[id],
  });
});
// Student delete metodi
server.delete("/students/:id", (req, res) => {
  const id = req.params.id;

  if (!students[id]) {
    return res.status(404).json({ message: "student not found" });
  }

  delete students[id];

  res.json({ message: "student deleted successfully" });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
