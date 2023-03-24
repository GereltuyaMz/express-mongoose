import express from "express";
import { getProducts, createProducts, updateProduct, deleteProduct } from "../controller/productController.js";
import upload from '../multer.js';

const router = express.Router();

router.route("/").get(getProducts).post(upload.single('file'), createProducts);
router.route("/:id").put(updateProduct).delete(deleteProduct);

export default router;