const mongoose = require("mongoose")
const mongoose_delete = require('mongoose-delete');
// Schema : Định dạng hình thù data (Shape data) Document

const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        address: String,
        phone: String,
        email: String,
        image: String,
        description: String,
    },
    { timestamps: true }
);
customerSchema.plugin(mongoose_delete);

//Model: Lưu hình dạng vào db  Collection
const customer = mongoose.model('Customer', customerSchema);
module.exports = customer 