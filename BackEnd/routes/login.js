const express = require("express");
const router = express.Router();

const { data } = require("../data/user_data");


router.post("/", (req, res) => {
  const { username, password } = req.body;

  const user = data.find((user) => user.username === username);

  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }
  if (user.password !== password) {
    return res.status(401).json({ message: "Incorrect password" });
  }

  res.json({ message: "Login successful", user });
});

module.exports = router;
