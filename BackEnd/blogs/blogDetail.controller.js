const express = require("express");
const router = express.Router();
// const { data } = require("../data/blog_data");
// const Blogs = require('./blog.model');

// route.get("/:blog_id", async(req, res) => {
//   const blog = await Blogs.findOne({
//     where:{
//       id: req.params.blog_id
//     }
//   });

//   if (!blog) {
//     return res.status(404).json({ message: "Blog not found" });
//   }

//   res.json(blog);
// });

// route.put("/:blog_id", async(req, res) => {
//   const updatedBlog = req.body;

//   const blog = await Blogs.findOne({
//     where: {id : req.params.blog_id }
//   });

//   blog.date = updatedBlog.date;
//   blog.authorID = updatedBlog.authorID;
//   blog.author = updatedBlog.author;
//   blog.title = updatedBlog.title;
//   blog.content = updatedBlog.content;
//   blog.type = updatedBlog.type;
//   blog.imageURL = updatedBlog.imageURL;
//   blog.category = updatedBlog.category;
//   blog.comments = updatedBlog.comments;

//   await blog.save();
//   res.json(blog);

//   if(!blog) return res.status(404).json({ message: "Blog not found" });
// });

// route.delete("/:blog_id", async(req, res) => {
//   await Blogs.destroy({
//     where:{
//       id: req.params.blog_id
//     }
//   });
//   res.json({ message: "Blog deleted"});
// });

// module.exports = route;

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
