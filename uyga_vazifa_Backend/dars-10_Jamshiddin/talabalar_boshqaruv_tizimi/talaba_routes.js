import { Router } from "express";
import {
  getAll,
  getById,
  create,
  updatePut,
  updatePatch,
  remove,
  otlichniklar,
} from "./talaba_controlls.js";

const router = Router();

// 🔹 LIST + FILTER
router.get("/", getAll);

// 🔹 SPECIAL
router.get("/otlichniklar", otlichniklar);

// 🔹 CRUD
router.post("/", create);
router.put("/:id", updatePut);
router.patch("/:id", updatePatch);
router.delete("/:id", remove);

// 🔹 ID HAR DOIM OXIRIDA
router.get("/:id", getById);

export default router;
