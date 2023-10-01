const express = require("express");
const app = express();

app.use(express.json());

const blogs = [
  { id: 1, title: "Blog Post 1", content: "Content for Blog Post 1" },
  { id: 2, title: "Blog Post 2", content: "Content for Blog Post 2" },
];

// GET Blog by Id
app.get("/api/v1/blogs/:blog_id", (req, res) => {
  const blogId = parseInt(req.params.blog_id);
  const blog = blogs.find((blog) => blog.id === blogId);

  if (!blog) {
    return res.status(404).json({ message: "Blog not found" });
  }

  res.json(blog);
});

// PUT Blog by Id
app.put("/api/v1/blogs/:blog_id", (req, res) => {
  const blogId = parseInt(req.params.blog_id);
  const updatedBlog = req.body;

  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].id === blogId) {
      blogs[i] = { ...blogs[i], ...updatedBlog };
      return res.json(blogs[i]);
    }
  }

  return res.status(404).json({ message: "Blog not found" });
});

//DELETE Blog by Id
app.delete("/api/v1/blogs/:blog_id", (req, res) => {
  const blogId = parseInt(req.params.blog_id);

  const index = blogs.findIndex((blog) => blog.id === blogId);

  if (index === -1) {
    return res.status(404).json({ message: "Blog not found" });
  }

  const deletedBlog = blogs.splice(index, 1)[0];
  res.json({ message: "Blog deleted", deletedBlog });
});

// Server
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
