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

//Service: Đẩy tất cả phần xử lý sang Service

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

const putCustomersService = async (id, name, email, address) => {
    try {
        let result = await customer.updateOne({ _id: id }, { name, email, address });
        return result
    } catch (error) {
        console.log("CHECK ERROR: ", error);
        return null
    }
}
module.exports = {
    createCustomerService, createArrayCustomerService, getAllCustomerService, putCustomersService
}