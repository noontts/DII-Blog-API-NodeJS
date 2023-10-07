const express = require("express");
const cors = require('cors');
const multer = require('multer');

const commendRoutes = require("./routes/comments");
const blogDetailRoutes = require("./routes/blogDetail");
const blogRoutes = require("./routes/blogList");
const imagesRoutes = require("./routes/images");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'data/image');
  },
  filename: function (req, file, cb) {
    cb(null, req.body.name);
  }
});

const upload = multer({ storage: storage});

app.post('/api/v1/upload', upload.single('file'), (req,res)=>{
  res.status(200).json('File have uploaded!');
})

app.use("/api/v1/blogs", commendRoutes);
app.use("/api/v1/blogs", blogDetailRoutes);
app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/blogs", imagesRoutes);

//Create Server
app.listen(3000, () => {
  console.log("Listening on port: 3000");
});
