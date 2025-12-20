import { Router } from "express";
import {
  getAll,
  getById,
  create,
  updatePut,
  updatePatch,
  remove,
  otlichniklar,
  filterTalabalar,
} from "../controllers/talabalar.controller.js";

const router = Router();

router.get("/", getAll);
router.get("/otlichniklar", otlichniklar);
router.get("/filter", filterTalabalar);
router.get("/:id", getById);

router.post("/", create);
router.put("/:id", updatePut);
router.patch("/:id", updatePatch);
router.delete("/:id", remove);

export default router;
