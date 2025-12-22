import express from "express";
import { promises as fs } from "fs";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = 3000;

app.use(express.static("public"));

app.get("/photos", async (req, res) => {
  const ITEMS_PER_PAGE = 10;

  console.log(req.query);

  const page = Number(req.query.page) || 1;
  const ipp = Number(req.query.ipp) || ITEMS_PER_PAGE;
  const albumId = req.query.albumId ? Number(req.query.albumId) : null;

  try {
    let data = JSON.parse(await fs.readFile("./public/photos.json", "utf8"));

    // albumId filter
    if (albumId) {
      data = data.filter((item) => item.albumId === albumId);
    }
    // pagination
    const start = (page - 1) * ipp;
    console.log(
      `start: ${start}, page: ${page}, ${ipp}, data length: ${data.length}`
    );

    var resp = {};
    const paginated = data.slice(start, start + ipp);
    resp.data = paginated;
    resp.count = data.length;

    res.json(resp);
  } catch (error) {
    console.error("SERVER ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
