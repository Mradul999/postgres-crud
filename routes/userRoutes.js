import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUserNameById,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/user", getUsers);
router.get("/user/:id", getUser);
router.post("/user/createuser", createUser);
router.post("/user/updateusername", updateUserNameById);
router.delete("/user/deleteuser", deleteUser);

export default router;
