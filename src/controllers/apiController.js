const User = require("../models/users")

// Thao tác với Database (DB) thì dùng: await async vì nó chạy bất đồng bộ
const getUsersAPI = async (req, res) => {
    let results = await User.find({}); // chờ model
    return res.status(200).json(
        {
            errCode: 0,
            data: results
        })

}
// Tham khảo từ: https://mongoosejs.com/docs/index.html
const postCreateUserAPI = async (req, res) => {
    let email = req.body.email
    let name = req.body.myName
    let city = req.body.city
    let user = await User.create({
        email: email,
        name: name,
        city: city
    }) // ODM
    return res.status(200).json(
        {
            errCode: 0,
            data: user
        })
}


module.exports = {
    getUsersAPI, postCreateUserAPI
}