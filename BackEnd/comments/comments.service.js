const Comments = require("./comments.model");
const Blogs = require("../blogs/blog.model");

async function getComments(blogId) {
  try {
    const comments = await Comments.findAll({
      where: {
        blogId,
      },
    });

    if (comments.length === 0) {
      return { status: 404, error: "No comments found" };
    }

    return { status: 200, comments };
  } catch (error) {
    console.error(error);
    return { status: 500, error: "Internal Server Error" };
  }
}

async function createComment(blogId, author_id, comment_content, date) {
  const blog = await Blogs.findByPk(blogId);

  if (!blog) {
    return { status: 404, error: "Blog not found" };
  }

  const newComment = await Comments.create({
    author_id,
    comment_content,
    date,
    blogId,
  });

  return { status: 200, comment: newComment };
}

async function updateComment(
  blogId,
  commentId,
  author_id,
  comment_content,
  date
) {
  const commentToUpdate = await Comments.findOne({
    where: {
      id: commentId,
      blogId,
    },
  });

  if (!commentToUpdate) {
    return { status: 404, error: "Comment not found" };
  }

  await commentToUpdate.update({
    author_id,
    comment_content,
    date,
  });

  return { status: 200, comment: commentToUpdate };
}

async function deleteComment(blogId, commentId) {
  const commentToDelete = await Comments.findOne({
    where: {
      id: commentId,
      blogId,
    },
  });

  if (!commentToDelete) {
    return { status: 404, error: "Comment not found" };
  }

  await commentToDelete.destroy();
  return { status: 204 };
}

module.exports = {
  getComments,
  createComment,
  updateComment,
  deleteComment,
};
