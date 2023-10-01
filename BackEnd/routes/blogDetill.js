const express = require("express");

const { data } = require("../data");

const route = express.Router();

// GET Blog by Id
app.get("/api/v1/blogs/:blog_id", (req, res) => {
  const blogId = Number.parseInt(req.params.blog_id);
  const blog = data.find((blog) => blog.id === blogId);

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  res.json(blog);
});

// PUT Blog by Id
app.put("/api/v1/blogs/:blog_id", (req, res) => {
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
app.delete("/api/v1/blogs/:blog_id", (req, res) => {
  const blogId = Number.parseInt(req.params.blog_id);

  const index = data.findIndex((blog) => blog.id === blogId);

  if (index === -1) {
    return res.status(404).json({ message: "Blog not found" });
  }

  const deletedBlog = data.splice(index, 1)[0];
  res.json({ message: "Blog deleted", deletedBlog });
});

module.exports = route;
