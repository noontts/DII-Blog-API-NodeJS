const express = require("express");
const router = express.Router();

const { data } = require("../data/user_data");


router.post("/register", (req, res) => {
  const { username, password, email } = req.body;

  const exist = data.find((user) => user.username === username);

  if (exist) {
    return res.status(400).json({ message: "Username already exists" });
  }

  const newUser = {
    id_user: data.length + 1,
    username,
    email,
    password,
  };

  data.push(newUser);

  res.json({ message: "User registered successfully", user: newUser });
});

module.exports = router;
