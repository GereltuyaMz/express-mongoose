import Product from "../model/productModel.js";
import cloudinary from "../cloudinary.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createProducts = async (req, res) => {
  const product = req.body;
  try {
    const uploadCloud = await cloudinary.v2.uploader.upload(req.file.path);
    await Product.create({ ...product, image: uploadCloud.secure_url });
    res.status(200).json({ ...product, image: uploadCloud.secure_url });
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const updateProduct = async (req, res) => {
  const { params, body } = req;

  try {
    await Product.findByIdAndUpdate(params.id, body);
    res.status(200).json(body)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    await Product.findByIdAndDelete(productId);
    res.status(200).json(productId)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}