const express = require("express");
const cors = require('cors');

const commendRoutes = require("./routes/comments");
const blogDetailRoutes = require("./routes/blogDetail");
const blogRoutes = require("./routes/blogList");
const imagesRoutes = require("./routes/images");
const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login");


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/blogs", commendRoutes);
app.use("/api/v1/blogs", blogDetailRoutes);
app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/blogs", imagesRoutes);
app.use("/api/v1/register", registerRoutes);
app.use("/api/v1/login", loginRoutes);



//Create Server
app.listen(3000, () => {
  console.log("Listening on port: 3000");
});
