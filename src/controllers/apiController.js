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

module.exports = {
    getUsersAPI
}