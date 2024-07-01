const customer = require("../models/customer")

const createCustomerService = async (customerData) => {
    try {
        let result = await customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.image
        })
        return result
    }
    catch (error) {
        console.log(error);
        return null
    }

}

const createArrayCustomerService = async (arr) => {
    try {
        let result = await customer.insertMany(arr)
        return result
    }
    catch (error) {
        console.log("error: ", error);
        return null
    }
}

const getAllCustomerService = async () => {
    try {
        let results = await customer.find({});
        return results
    } catch (error) {
        console.log("CHECK ERROR: ", error);
        return null
    }
}
module.exports = {
    createCustomerService, createArrayCustomerService, getAllCustomerService
}