const Blogs = require("./blog.model");

async function getBlog(blogId) {
  try {
    const blog = await Blogs.findOne({
      where: { id: blogId },
    });

    if (!blog) {
      return { status: 404, message: "Blog not found" };
    }

    return { status: 200, blog };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while fetching the blog",
    };
  }
}

async function updateBlog(blogId, updatedBlog) {
  const blog = await Blogs.findOne({
    where: { id: blogId },
  });

  if (!blog) {
    return { status: 404, message: "Blog not found" };
  }

  Object.assign(blog, updatedBlog);

  try {
    await blog.save();
    return { status: 200, blog };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while updating the blog",
    };
  }
}

async function deleteBlog(blogId) {
  try {
    await Blogs.destroy({
      where: { id: blogId },
    });
    return { status: 200, message: "Blog deleted" };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while deleting the blog",
    };
  }
}

module.exports = {
  getBlog,
  updateBlog,
  deleteBlog,
};
