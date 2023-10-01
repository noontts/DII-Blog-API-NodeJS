const express = require("express");
const app = express();

const router = require('./routes/products');
app.use('/api/products', router);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
