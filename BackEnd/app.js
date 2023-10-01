const express = require("express");

const commendRoutes = require("./routes/comments");
const blogDetailRoutes = require("./routes/blogDetail");
const blogRoutes = require("./routes/blogList");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/blogs", commendRoutes);
app.use("/api/v1/blogs", blogDetailRoutes);
app.use("/api/v1/blogs", blogRoutes);

//Create Server
app.listen(3000, () => {
  console.log("Listening on port: 3000");
});
