const express = require("express");
const router = express.Router();
const Blogs = require("../blogs/blog.model");
const Comments = require("./comments.model");

router.get("/:id/comments", async (req, res) => {
  try {
    const blog = await Blogs.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Comments,
          as: "blogComments",
        },
      ],
    });

    res.json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/:id/comments", async (req, res) => {
  try {
    const blog = await Blogs.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    const { author_id, comment_content, date } = req.body;

    const newComment = await Comments.create({
      author_id,
      comment_content,
      date,
      blogId: blog.id,
    });

    blog.comments.push(newComment.id);

    await blog.save();

    res.json(newComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id/comments/:comments_id", async (req, res) => {
  try {
    const blog = await Blogs.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    const commentId = req.params.comments_id;
    const { author_id, comment_content, date, reply_comment } = req.body;

    // Find the comment to update
    const commentToUpdate = await Comments.findOne({
      where: {
        id: commentId,
        blogId: blog.id,
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
      reply_comment,
    });

    res.json(commentToUpdate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id/comments/:comments_id", async (req, res) => {
  try {
    const blog = await Blogs.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    const commentId = req.params.comments_id;

    // Find the comment to delete
    const commentToDelete = await Comments.findOne({
      where: {
        id: commentId,
        blogId: blog.id,
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
