const express = require("express");
const router = express.Router();

const loginService = require("./login.service");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const loginResult = await loginService.login(username, password);

  res
    .status(loginResult.status)
    .json({ message: loginResult.message, user: loginResult.user });
});

module.exports = router;
