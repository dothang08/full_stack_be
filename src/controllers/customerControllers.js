const customer = require("../models/customer");
const { createCustomerService, createArrayCustomerService } = require("../service/customerService");
const { uploadSingleFile } = require("../service/fileservice")

// {key: value, key1: value1}

//Thao tác với dữ liệu text dùng: req.body
//Thao tác với dữ liệu file dùng: req.files
module.exports = {
    postCreateCustomer: async (req, res) => {
        let { name, address, phone, email, description } = req.body
        // image: String,
        let imageUrl = ""
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
            // do nothing
        }
        else {
            let result = await uploadSingleFile(req.files.image);
            imageUrl = result.path
        }

        let customerData = {
            name,
            address,
            phone,
            email,
            description,
            image: imageUrl
        }

        let customer = await createCustomerService(customerData)

        return res.status(200).json({
            EC: 0,
            data: customer
        }
        )
    },

    postCreateArrayCustomer: async (req, res) => {
        let customers = await createArrayCustomerService(req.body.customers)
        if (customers) {
            return res.status(200).json({
                EC: 0,
                data: customers
            }
            )
        }
        else {
            return res.status(200).json({
                EC: -1,
                data: customers
            }
            )
        }

    }

}
