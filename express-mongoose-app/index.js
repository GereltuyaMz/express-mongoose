import express from "express";
import cors from "cors";
import colors from "colors";
import productRoutes from "./routes/productRoute.js";
import * as dotenv from 'dotenv';
import connectMongoDB from "./config/mongoDB.js";
dotenv.config();

const PORT = process.env.PORT;
const mongoConnectionStr = process.env.MONGO_URL;
const app = express();

app.use(express.static('public'))
app.use(express.json());
app.use(cors());

app.use("/products", productRoutes);
app.use('/fileUpload', express.static('uploads'))

app.get('/', (req, res) => {
  res.json({ message: "Express deploy to vercel" });
})

connectMongoDB(mongoConnectionStr);

app.listen(PORT, () => {
  console.log(`express app running on http://localhost:${PORT}`.bgBlue);
})