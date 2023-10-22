const express = require("express");
const router = express.Router();

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
