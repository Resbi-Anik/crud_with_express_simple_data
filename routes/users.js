import express from "express";
import {
  getUsers,
  createUsers,
  getSpecificUser,
  updateSpecificUsers,
  deleteSpecificUsers,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUsers);
router.get("/:id", getSpecificUser);
router.patch("/:id", updateSpecificUsers);
router.delete("/:id", deleteSpecificUsers);

export default router;
