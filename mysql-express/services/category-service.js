import { pool } from "../config/mysql-config.js";

export async function getCategory(id) {
  const [row] = await pool.query(`SELECT * FROM category WHERE id=${id}`);
  return row ? row[0] : null;
}

export async function getCategories(limit) {
  if (limit) {
    const [rows] = await pool.query(
      `SELECT * FROM category LIMIT ${limit}`
    );
    return rows;
  } else {
    const [rows] = await pool.query(
      `SELECT * FROM category`
    );
    return rows;
  }
}

export async function createCategory(name, slug, imgUrl) {
  console.log('category data type ', name, slug, imgUrl);
  const [result] = await pool.query(
    `INSERT INTO category (name, slug, imgUrl) VALUES (?,?,?)`,
    [name, slug, imgUrl]
  );
  return result;
}

export const updateCategory = async (id, updatedData) => {
  let [result] = "";
  for (let i = 0; i < Object.keys(updatedData).length; i++) {
    result = await pool.query(
      `UPDATE category SET ${Object.keys(updatedData)[i]} = '${Object.values(updatedData)[i]}' WHERE id = ${id}`
    );
  }
  return result;
}

export const deleteCategory = async (id) => {
  const [result] = await pool.query(
    `DELETE FROM category WHERE id=${id};`
  );
  return result;
}