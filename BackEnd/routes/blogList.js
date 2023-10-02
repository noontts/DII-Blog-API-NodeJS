const express = require("express");
const { data } = require("../data/blog_data");

const router = express.Router();

router.get("/", (req, res) => {
  const category = req.query.category;
  switch (category) {
    case "sports":
      const sport = data.filter((blog) => blog.category === "sports");
      if (sport) {
        res.json(sport);
      } else {
        res.status(404).json({ message: "Sports not found" });
      }
      break;
      
    case "technology":
      const technology = data.filter((blog) => blog.category === "technology");
      if (technology) {
        res.json(technology);
      } else {
        res.status(404).json({ message: "technology not found" });
      }
      break;

    case "fashion":
      const fashion = data.filter((blog) => blog.category === "fashion");
      if (fashion) {
        res.json(fashion);
      } else {
        res.status(404).json({ message: "fashion not found" });
      }
      break;

    case "food":
      const food = data.filter((blog) => blog.category === "food");
      if (food) {
        res.json(food);
      } else {
        res.status(404).json({ message: "food not found" });
      }
      break;

    default:
      res.json(data);
      break;
  }
});

// router.get("/:id", (req, res) => {
//   const id = Number.parseInt(req.params.id);
//   const blogIndex = data.findIndex((blog) => blog.blog_id === id);
//   res.json(data[blogIndex]);
// });

router.post("/", (req, res) => {
  const { title ,author, content, type, category } = req.body;
  const newBlog = {
    blog_id: data.length + 1,
    date: new Date().toLocaleDateString(),
    author,
    title,
    content,
    type,
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
