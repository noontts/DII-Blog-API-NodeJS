const express = require("express");

const commendRoutes = require("./routes/comments");
const blogDetailRoutes = require("./routes/blogDetail");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/blogs/:id/commends", commendRoutes);
app.use("/blogDetill", blogDetailRoutes);

//Create Server
app.listen(3000, () => {
  console.log("Listening on port: 3000");
});
