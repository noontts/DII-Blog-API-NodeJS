const { Op } = require('sequelize');
const Blogs = require('./blog.model');
const users = require('../auth/user.model');

async function filterBlog(userId, category, search, type) {
  try {
    let filtered = {};

    if (category) {
      filtered.category = category.toLowerCase();
    }

    if (type) {
      filtered.type = type.toLowerCase();
    }

    if (userId) {
      filtered.authorID = Number.parseInt(userId);
    }

    if (search) {
      filtered.title = { [Op.iLike]: `%${search.toLowerCase()}%` };
    }

    const filteredBlogs = await Blogs.findAll({ where: filtered });

    if (filteredBlogs.length === 0) {
      return { status: 404, message: "No matching blogs found" };
    } else {
      return { status: 200, blogs: filteredBlogs };
    }
  } catch (error) {
    console.error(error);
    return { status: 500, message: "An error occurred while fetching blogs" };
  }
}

async function createBlog(title, content, type, imageURL, category, authorID) {
  const user = await users.findByPk(authorID);

  if (!user) {
    return { status: 400, message: "No matching user found" };
  }

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

  return { status: 200, blog: newBlog };
}

module.exports = {
  filterBlog,
  createBlog,
};
