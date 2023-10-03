const mongoose = require('mongoose');

let imgSchema = new mongoose.Schema({
    img:String
})


const img = mongoose.model("img",imgSchema);

module.exports = img