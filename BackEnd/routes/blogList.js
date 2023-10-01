const express = require('express');
const { data } = require('../data');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(data);
});

router.get('/:id', (req, res) => {
  const id = Number.parseInt(req.params.id);
  const product = data.find(
        (product) => product.id === id
    );
  res.json(product);
});

router.post('/', (req, res) => {
  const { name, imageURL, type } = req.body;
  const newProduct = {
    id: (data.length + 1),
    name,
    imageURL,
    type
  };
  data.push(newProduct);
  res.json(newProduct);
});

router.put('/:id', (req, res) => {
  const { name, imageURL, type } = req.body;
  const id = Number.parseInt(req.params.id);
  const upProduct = data.find((
        product) => product.id === id
    );
    upProduct.name = name;
    upProduct.imageURL = imageURL;
    upProduct.type = type;
 
  res.json(upProduct);
});

router.delete('/:id', (req, res) => {
  const id = Number.parseInt(req.params.id);
  const index = data.findIndex(
        (product) => product.id === id
    );
  data.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
