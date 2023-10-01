const express = require("express");
const router = require("./routes/blogList");
const app = express();

app.use(express.json());
app.use("/api/v1/blogs", router);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
