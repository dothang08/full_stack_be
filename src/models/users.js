const mongoose = require("mongoose")
// Schema : Định dạng hình thù data (Shape data) Document
const usersSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String
});

//Model: Lưu hình dạng vào db  Collection
const User = mongoose.model('user', usersSchema);
module.exports = User 