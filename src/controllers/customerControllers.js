const { createCustomerService } = require("../service/customerService");
const { uploadSingleFile } = require("../service/fileservice")

// key: value
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
    }
}
