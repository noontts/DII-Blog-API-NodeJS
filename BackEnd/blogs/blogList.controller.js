const express = require("express");
const { data } = require("../data/blog_data");
const Blogs = require('./blogModel');
const { sequelize } = require("../config/database");
const router = express.Router();

router.get("/", async(req, res) => {
  const category = req.query.category;
  const search = req.query.search;
  const type = req.query.type;

  try{
    let whereClause = {};

    if (category) {
        whereClause.category = category.toLowerCase();
    }
  
    if (type) {
      whereClause.type = type.toLowerCase();
    }
  
    if (search) {
      whereClause.title = {[sequelize.Op.iLike]: `%${search.toLowerCase()}%` };
    }

    const filtered = await Blogs.findAll({
      where: whereClause,
    });

    if (filtered.length === 0) {
      res.status(404).json({ message: "No matching blogs found" });
    } else {
      res.json(filtered);
    }

  }catch(error){
    console.error(error);
    res.status(500);
  }
  
});

// router.get("/:id", (req, res) => {
//   const id = Number.parseInt(req.params.id);
//   const blogIndex = data.findIndex((blog) => blog.blog_id === id);
//   res.json(data[blogIndex]);
// });

router.post("/", async(req, res) => {
  const { title, author, content, type, imageURL, category, authorID } = req.body;
  const newBlog = await Blogs.create({
    date: new Date().toLocaleDateString(),
    authorID,
    author,
    title,
    content,
    type,
    imageURL,
    category,
    comments: [],
  });

  res.json(newBlog);
});

module.exports = router;