import express from "express";
import upload from '../multer.js';
import { getAllUser, getUser, createUser, updateUser, deleteUser, logIn, getMe } from "../controller/userController.js";
import verifyToken from "../middlewares/auth.js";

const router = express.Router();

router.get("/me", verifyToken, getMe);
router.route("/").get(getAllUser).post(upload.single('file'), createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);
router.post('/login', logIn);

export default router;