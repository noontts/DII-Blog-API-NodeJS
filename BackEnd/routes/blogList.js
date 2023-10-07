const express = require("express");
const { data } = require("../data/blog_data");

const router = express.Router();

router.get("/", (req, res) => {
  const category = req.query.category;
  const search = req.query.search;
  const type = req.query.type;

  let filtered = data;

  if (category) {
    filtered = filtered.filter(
      (blog) => blog.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (type) {
    filtered = filtered.filter(
      (blog) => blog.type.toLowerCase() === type.toLowerCase()
    );
  }

  if (search) {
    filtered = filtered.filter(
      (blog) => blog.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (filtered.length === 0) {
    res.status(404).json({ message: "No matching blogs found" });
  } else {
    res.json(filtered);
  }
});

// router.get("/:id", (req, res) => {
//   const id = Number.parseInt(req.params.id);
//   const blogIndex = data.findIndex((blog) => blog.blog_id === id);
//   res.json(data[blogIndex]);
// });

router.post("/", (req, res) => {
  const { title, author, content, type, image, category } = req.body;
  const newBlog = {
    blog_id: data.length + 1,
    date: new Date().toLocaleDateString(),
    author,
    title,
    content,
    type,
    image,
    category,
    comments: [],
  };
  data.push(newBlog);
  res.json(newBlog);
});

router.delete("/:id", (req, res) => {
  const id = Number.parseInt(req.params.id);
  const index = data.findIndex((blog) => blog.blog_id === id);
  if (index !== -1) {
    data.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: "Blog not found" });
  }
});

module.exports = router;
