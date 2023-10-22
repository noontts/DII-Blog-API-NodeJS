const express = require("express");
const router = express.Router();

const listService = require('./blogList.service');

router.get('/', async (req, res) => {
  const { userId, category, search, type } = req.query;

  const result = await listService.filterBlog(userId, category, search, type);

  res.status(result.status).json(result.blogs);
});

router.post('/', async (req, res) => {
  const { title, content, type, imageURL, category, authorID } = req.body;

  const result = await listService.createBlog(title, content, type, imageURL, category, authorID);

  res.status(result.status).json(result.blog);
});

module.exports = router;
