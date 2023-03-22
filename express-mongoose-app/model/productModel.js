import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: String,
  subTitle: String,
  image: String,
  price: Number,
  description: String,
  hashtag: [String],
  rating: Number
}, { timestamps: true })

const Product = mongoose.model("Product", productSchema);

export default Product;