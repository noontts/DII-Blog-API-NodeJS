const express = require("express");
const { Op } = require('sequelize');
const Blogs = require('./blog.model');
const users = require("../auth/user.model");
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
      whereClause.title = { [Op.iLike]: `%${search.toLowerCase()}%` };

      console.log(whereClause.title);
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

router.post("/", async(req, res) => {
  const { title, content, type, imageURL, category, authorID } = req.body;

  const user = await users.findByPk(authorID);

  if(!user) return res.status(400).json({ message: "No matching user found"});

  const author = user.dataValues.username;
  
  const newBlog = await Blogs.create({
    date: new Date().toLocaleDateString(),
    authorID,
    author,
    title,
    content,
    type,
    imageURL,
    category,
  });

  res.json(newBlog);
  
});

module.exports = router;
