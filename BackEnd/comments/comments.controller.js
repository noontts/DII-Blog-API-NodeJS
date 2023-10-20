const express = require("express");
const router = express.Router();
// const Comments = require("./comments.model");
// const Blogs = require("../blogs/blog.model");

// router.get("/:id/comments", async (req, res) => {
//   try {
//     const comments = await Comments.findAll({
//       where: {
//         blogId: req.params.id,
//       }
//     });

//     if(comments.length === 0) return res.status(404).json({ error: "Not Found Comment"});

//     res.json(comments);

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// router.post("/:id/comments", async (req, res) => {
//   try {
//     const { author_id, comment_content, date } = req.body;

//     const blog = await Blogs.findByPk(req.params.id);

//     if(!blog) return res.status(404).json({ error: "Not Found Blogs"});

//     const newComment = await Comments.create({
//       author_id,
//       comment_content,
//       date,
//       blogId: req.params.id,
//     });

//     res.json(newComment);

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// router.put("/:id/comments/:comments_id", async (req, res) => {
//   try {
//     const { author_id, comment_content, date } = req.body;

//     const commentToUpdate = await Comments.findOne({
//       where: {
//         id: req.params.comments_id,
//         blogId: req.params.id,
//       },
//     });

//     if (!commentToUpdate) {
//       return res.status(404).json({ error: "Comment not found" });
//     }

//     // Update the comment
//     await commentToUpdate.update({
//       author_id,
//       comment_content,
//       date,
//     });

//     res.json(commentToUpdate);

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// router.delete("/:id/comments/:comments_id", async (req, res) => {
//   try {

//     // Find the comment to delete
//     const commentToDelete = await Comments.findOne({
//       where: {
//         id: req.params.comments_id,
//         blogId: req.params.id,
//       },
//     });

//     if (!commentToDelete) {
//       return res.status(404).json({ error: "Comment not found" });
//     }

//     // Delete the comment
//     await commentToDelete.destroy();

//     res.sendStatus(204);
    
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// module.exports = router;



const commentsService = require('./comments.service');

router.get('/:id/comments', async (req, res) => {
  const result = await commentsService.getComments(req.params.id);
  res.status(result.status).json(result.comments);
});

router.post('/:id/comments', async (req, res) => {
  const { author_id, author, comment_content} = req.body;
  const result = await commentsService.createComment(req.params.id, author, author_id, comment_content);
  res.status(result.status).json(result.comment);
});

router.put('/:id/comments/:comments_id', async (req, res) => {
  const { author_id, comment_content, date } = req.body;
  const result = await commentsService.updateComment(req.params.id, req.params.comments_id, author_id, comment_content, date);
  res.status(result.status).json(result.comment);
});

router.delete('/:id/comments/:comments_id', async (req, res) => {
  const result = await commentsService.deleteComment(req.params.id, req.params.comments_id);
  res.sendStatus(result.status);
});

module.exports = router;
