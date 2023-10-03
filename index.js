const express = require('express')
const multer  = require('multer')
const db = require('./dbs')
const app = express()

const store = multer.diskStorage({
    destination:"images",
    filename:(req ,File ,cb)=>{
        cb(null,Date.now()+File.originalname)
    }
})

const upload = multer({
    storage: store,
}).single("img");





app.post('/', upload, async (req, res) =>{
     await img.create({img:__dirname + "/" + req.file.path}) 

    req.send("ugjcxhdxc")

})

app.listen(9999 ,()=>{
    db();
    console.log('listening on');
})
