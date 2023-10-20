const express = require("express");
const router = express.Router();

const regisService = require("./register.service");

router.post("/register", async (req, res) => {
  const { username, password, email, profile_imgURL } = req.body;

  const regisResult = await regisService.register(username, password, email, profile_imgURL);

  res.status(regisResult.status).json({ message: regisResult.message, user: regisResult.user });
});

router.get("/allid", async (req, res) => {
  const allUserIds = await regisService.getAll();

  res.status(allUserIds.status).json(allUserIds.users);
});

module.exports = router;
