import express from "express";
import { getProducts, createProducts, updateProduct, deleteProduct } from "../controller/productController.js";
// import cloudinary from "./cloudinary.js";
import upload from '../multer.js';

const router = express.Router();

router.get("/", getProducts);
router.post("/", upload.single('file'), createProducts);
router.put("/:id", updateProduct);
router.delete('/:id', deleteProduct);

export default router;