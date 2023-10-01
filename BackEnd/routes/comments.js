const express = require('express');
const { data }= require('../data/blog_data')
const router = express.Router();

let currentCommentId = 20;

router.get('/:id/comments', (req,res) =>{
    const id = Number.parseInt(req.params.id);
    const blog_comment = data.find((blog)=> blog.blog_id === id);
    res.json(blog_comment.comments);
});

router.post('/:id/comments' , (req,res)=>{
    const id = Number.parseInt(req.params.id);
    const blog = data.find((blog)=>blog.blog_id === id);
    const {comment_content, date, reply_comment} = req.body;
    const newComment = {
        comment_id : ++currentCommentId,
        comment_content,
        date,
        reply_comment
    }
    blog.comments.push(newComment);
    res.json(newComment);
})

router.put('/:id/comments/:comments_id',(req,res)=>{
    const blog_id = Number.parseInt(req.params.id);
    const comments_id = Number.parseInt(req.params.comments_id);
    const {comment_content, date, reply_comment} = req.body;

    const blog = data.find((blog)=>blog.blog_id === blog_id);
    const comments = blog.comments.find((comment)=> comment.comment_id === comments_id);

    comments.comment_content = comment_content;
    comments.date = date;
    comments.reply_comment = reply_comment;

    res.json(comments);
});

router.delete('/:id/comments/:comments_id',(req,res)=>{
    const blog_id = Number.parseInt(req.params.id);
    const comments_id = Number.parseInt(req.params.comments_id);

    const blog = data.find((blog)=>blog.blog_id === blog_id);
    const commentsIndex = blog.comments.findIndex((comment)=> comment.comment_id === comments_id);

    blog.comments.splice(commentsIndex, 1)

    res.sendStatus(204);
});


module.exports = router;
