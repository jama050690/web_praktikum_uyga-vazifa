import { Router } from "express";
import {
  getAll,
  getById,
  create,
  updatePut,
  updatePatch,
  remove,
  olKitob,
  qaytarKitob,
} from "./kitob_controlls.js";

const router = Router();

// 🔹 LIST + FILTER
router.get("/", getAll);

// 🔹 CRUD + BUSINESS ACTIONS
router.post("/", create);
router.post("/:id/ol", olKitob);
router.post("/:id/qaytarish", qaytarKitob);
router.put("/:id", updatePut);
router.patch("/:id", updatePatch);
router.delete("/:id", remove);

// 🔹 ID HAR DOIM OXIRIDA
router.get("/:id", getById);

export default router;
