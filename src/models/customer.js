const mongoose = require("mongoose")
// Schema : Định dạng hình thù data (Shape data) Document
const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        address: String,
        phone: String,
        email: String,
        image: String,
        description: String,
    },
    { timestamps: true }
);

//Model: Lưu hình dạng vào db  Collection
const Customer = mongoose.model('user', customerSchema);
module.exports = Customer 