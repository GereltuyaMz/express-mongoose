const express = require('express');
const cors = require('cors');
const fs = require("fs");
const { uuid } = require('uuidv4');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

let users = JSON.parse(fs.readFileSync("usersData.json", "utf8"));

const updateUsersFile = () => {
  fs.writeFileSync("usersData.json", JSON.stringify(users));
};

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const { firstname } = req.body;
  const newUser = { id: uuid(), firstname };
  users.push(newUser);
  updateUsersFile();
  res.json(newUser);
});

let usersData = JSON.parse(fs.readFileSync("usersData.json", "utf-8"));

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  usersData = usersData.filter((user) => user.id !== id);
  fs.writeFileSync("usersData.json", JSON.stringify(usersData));
  res.json(id);
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})