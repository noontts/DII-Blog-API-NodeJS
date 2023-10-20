const express = require("express");
const router = express.Router();
const Comments = require("./comments.model");
const Blogs = require("../blogs/blog.model");

router.get("/:id/comments", async (req, res) => {
  try {
    const comments = await Comments.findAll({
      where: {
        blogId: req.params.id,
      }
    });

    if(comments.length === 0) return res.status(404).json({ error: "Not Found Comment"});

    res.json(comments);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/:id/comments", async (req, res) => {
  try {
    const { author_id, comment_content, date } = req.body;

    const blog = await Blogs.findByPk(req.params.id);

    if(!blog) return res.status(404).json({ error: "Not Found Blogs"});

    const newComment = await Comments.create({
      author_id,
      comment_content,
      date,
      blogId: req.params.id,
    });

    res.json(newComment);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id/comments/:comments_id", async (req, res) => {
  try {
    const { author_id, comment_content, date } = req.body;

    const commentToUpdate = await Comments.findOne({
      where: {
        id: req.params.comments_id,
        blogId: req.params.id,
      },
    });

    if (!commentToUpdate) {
      return res.status(404).json({ error: "Comment not found" });
    }

    // Update the comment
    await commentToUpdate.update({
      author_id,
      comment_content,
      date,
    });

    res.json(commentToUpdate);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id/comments/:comments_id", async (req, res) => {
  try {

    // Find the comment to delete
    const commentToDelete = await Comments.findOne({
      where: {
        id: req.params.comments_id,
        blogId: req.params.id,
      },
    });

    if (!commentToDelete) {
      return res.status(404).json({ error: "Comment not found" });
    }

    // Delete the comment
    await commentToDelete.destroy();

    res.sendStatus(204);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
