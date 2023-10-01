const express = require("express");

const { data } = require("../data");

const route = express.Router();

// GET Blog by Id
route.get("/:blog_id", (req, res) => {
  const blogId = Number.parseInt(req.params.blog_id);
  const blog = data.find((blog) => blog.blog_id === blogId);

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  res.json(blog);
});

// PUT Blog by Id
route.put("/:blog_id", (req, res) => {
  const blogId = Number.parseInt(req.params.blog_id);
  const updatedBlog = req.body;

  for (let i = 0; i < data.length; i++) {
    v;
    if (data[i].id === blogId) {
      data[i] = { ...data[i], ...updatedBlog };
      return res.json(data[i]);
    }
  }

  return res.status(404).json({ message: "Blog not found" });
});

//DELETE Blog by Id
route.delete("/:blog_id", (req, res) => {
  const blogId = Number.parseInt(req.params.blog_id);

  const index = data.find((blog) => blog.id === blogId);

  if (index === -1) {
    return res.status(404).json({ message: "Blog not found" });
  }

  const deletedBlog = data.splice(index, 1)[0];
  res.json({ message: "Blog deleted", deletedBlog });
});

module.exports = route;
