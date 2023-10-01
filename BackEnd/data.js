const express = require('express');
const { data } = require('../data');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(data);
});

router.get('/:id', (req, res) => {
  const id = Number.parseInt(req.params.id);
  const blog = data.find(
        (blog) => blog.id === id
    );
  res.json(blog);
});

router.post('/', (req, res) => {
  const { name, imageURL, type } = req.body;
  const newBlog = {
    id: (data.length + 1),
    name,
    imageURL,
    type
  };
  data.push(newBlog);
  res.json(newBlog);
});

// router.put('/:id', (req, res) => {
//   const { name, imageURL, type } = req.body;
//   const id = Number.parseInt(req.params.id);
//   const updateBlog = data.find((
//         blog) => blog.id === id
//     );
//     updateBlog.name = name;
//     updateBlog.imageURL = imageURL;
//     updateBlog.type = type;
 
//   res.json(updateBlog);
// });

// router.delete('/:id', (req, res) => {
//   const id = Number.parseInt(req.params.id);
//   const index = data.findIndex(
//         (blog) => blog.id === id
//     );
//   data.splice(index, 1);
//   res.status(204).send();
// });

module.exports = router;
