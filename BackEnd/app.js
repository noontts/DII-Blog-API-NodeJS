const express = require('express');
const commendRoutes = require('./routes/comments');
const app = express();

app.use(express.json());



app.use('/api/v1/blogs/:id/commends', commendRoutes)

//Create Server
app.listen(3000,()=>{
    console.log('Listening on port: 3000');
})