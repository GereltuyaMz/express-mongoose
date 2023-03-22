import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRoutes from "./routes/productRoute.js";
import cloudinary from "./cloudinary.js";
import upload from './multer.js';
import * as dotenv from 'dotenv';

const PORT = 8080;
const mongoConnectionStr = 'mongodb+srv://gegiimz96:WZPB0AMnanB1ip8a@cluster0.fankm0j.mongodb.net/test';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/products", productRoutes);
app.use('/fileUpload', express.static('uploads'))

mongoose
  .connect(mongoConnectionStr)
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.error(err))

// app.post('/fileUpload', upload.single('image'), function (req, res, next) {
//   res.send(req.file);
//   console.log("reqfile", req.file);
// })

// app.post('/upload', upload.single('file'), async (req, res) => {
//   const uploadCloud = await cloudinary.v2.uploader.upload(req.file.path);
//   console.log("uploadCloud", uploadCloud);
//   return res.json({
//     success: true,
//     file: uploadCloud.secure_url
//   })
// })

app.listen(PORT, () => {
  console.log(`express app running on http://localhost:${PORT}`);
})