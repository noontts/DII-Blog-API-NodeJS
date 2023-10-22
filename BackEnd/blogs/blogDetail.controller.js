const express = require("express");
const router = express.Router();

const blogService = require("./blogDetail.service");

router.get("/:blog_id", async (req, res) => {
  const result = await blogService.getBlog(req.params.blog_id);
  res.status(result.status).json(result.blog);
});

router.put("/:blog_id", async (req, res) => {
  const result = await blogService.updateBlog(req.params.blog_id, req.body);
  res.status(result.status).json(result.blog);
});

router.delete("/:blog_id", async (req, res) => {
  const result = await blogService.deleteBlog(req.params.blog_id);
  res.status(result.status).json({ message: result.message });
});

module.exports = router;
