const express = require('express');
const app = express();
const commendRoutes = require('./routes/comments');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/v1/blogs', commendRoutes);

//Create Server
app.listen(3000,()=>{
    console.log('Listening on port: 3000');
})