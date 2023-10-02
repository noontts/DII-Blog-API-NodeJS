const express = require('express');
const router = express.Router();

const fileSystem = require('fs');
const path = require('path');

router.get('/images/:id',(req,res)=>{
    const id = Number.parseInt(req.params.id);

    let currentDirectory = path.join(__dirname,'../data/image');
    let filePath = path.join(currentDirectory,`image${id}.jpeg`);
    let stat = fileSystem.statSync(filePath);

    res.writeHead(200,{
        'Content-Type': 'image/jpeg',
        'Content-Length': stat.size
    })
    let readStream = fileSystem.createReadStream(filePath);
    readStream.pipe(res);
})

module.exports = router;