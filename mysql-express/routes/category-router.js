import express from "express";
import { createCategory, getCategory, getCategories, updateCategory, deleteCategory } from "../services/category-service.js";

const Router = express.Router();

Router.get("/category/:id", async (req, res) => {
  const { params } = req;
  const result = await getCategory(params.id);
  res.status(200).send(result);
})

Router.get("/categories", async (req, res) => {
  const { query } = req;
  const result = await getCategories(query.limit);
  res.status(200).send(result);
})

Router.post("/category", async (req, res) => {
  const { name, slug, imgUrl } = req.body;
  try {
    res.json(await createCategory(name, slug, imgUrl));
  } catch (err) {
    res.status(400).json("Something went wrong");
  }
})

Router.put("/category", async (req, res) => {
  const { query, body } = req;
  const result = await updateCategory(query.id, body);
  res.status(200).send(result);
})

Router.delete("/category", async (req, res) => {
  const { query } = req;
  const result = await deleteCategory(query.id);
  res.status(200).send(result);
})

export default Router;