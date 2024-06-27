const mongoose = require("mongoose")
// Schema : Định dạng hình thù data (Shape data)
const kittySchema = new mongoose.Schema({
    name: String
});

//Model: Lưu hình dạng vào db 
const Kitten = mongoose.model('Kitten', kittySchema);
module.exports = Kitten