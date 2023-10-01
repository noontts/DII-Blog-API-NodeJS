const express = require("express");
const { data } = require("../data/data");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(data);
});

router.get("/:id", (req, res) => {
  const id = Number.parseInt(req.params.id);
  const blog = data.find((blog) => blog.blog_id === id);
  res.json(blog);
});

router.post("/", (req, res) => {
  const { title, content, type, category, comments } = req.body;
  const newBlog = {
    blog_id: data.length + 1,
    date: new Date().toLocaleDateString(),
    author: "Your Author Name",
    title,
    content,
    type,
    category,
    comments: [],
  };
  data.push(newBlog);
  res.json(newBlog);
});


router.delete('/:id', (req, res) => {
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

// router.put('/:id', (req, res) => {
//   const { name, imageURL, type } = req.body;
//   const id = Number.parseInt(req.params.id);
//   const updateBlog = data.find((
//         blog) => blog.id === id
//     );
//     updateBlog.name = name;
//     updateBlog.imageURL = imageURL;
//     updateBlog.type = type;

//   res.json(updateBlog);
// });
