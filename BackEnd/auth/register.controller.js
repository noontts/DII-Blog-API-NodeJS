const express = require("express");
const router = express.Router();
const User = require("./user.model");
router.post("/register", async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const existingUser = await User.findOne({ where: { username } });

    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const newUser = await User.create({
      username,
      email,
      password,
    });

    res.json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "An error occurred while registering the user" });
  }
});

router.get("/allid", async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ message: "An error occurred while fetching user IDs" });
  }
});

module.exports = router;
