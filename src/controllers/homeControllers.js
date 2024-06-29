const connection = require("../config/database")
const { getAllUsers, getUserByID, updateUserbyID,
    deleteUserByID } = require("../service/CRUDservice")

const User = require("../models/users")

// Thao tác với Database (DB) thì dùng: await async vì nó chạy bất đồng bộ
const getHomepage = async (req, res) => {
    let results = await User.find({}); // chờ model
    return res.render('home.ejs', { listUsers: results }) // x <- y lấy y gán cho x 
}

const getTest = (req, res) => {
    res.render("sample.ejs")
}

const getCreatePage = (req, res) => {
    res.render("create.ejs")
}

const getUpdatePage = async (req, res) => {
    const userID = req.params.id
    // let user = await getUserByID(userID)
    let user = await User.findById(userID).exec();
    res.render("edit.ejs", { userEdit: user }) // lấy y gán cho x  : x <- y

}

// Tham khảo từ: https://mongoosejs.com/docs/index.html
const postCreateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.myName
    let city = req.body.city
    await User.create({
        email: email,
        name: name,
        city: city
    }) // ODM
    res.send("Create user succeed! ")
}

// https://mongoosejs.com/docs/api/model.html#Model.updateOne()
const postUpdateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.myName
    let city = req.body.city
    let userID = req.body.userID
    await User.updateOne({ _id: userID }, { email: email, name: name, city: city });
    res.redirect("/")
}


const postDeleteUser = async (req, res) => {
    const userID = req.params.id
    // let user = await getUserByID(userID)

    let user = await User.findById(userID).exec();
    res.render("delete.ejs", { userEdit: user })
}

// https://mongoosejs.com/docs/api/query.html#Query.prototype.deleteOne()
const postRemoveUser = async (req, res) => {
    const id = req.body.userID
    await User.deleteOne({ _id: id });
    res.redirect("/")
}
module.exports = {
    getHomepage, getTest, postCreateUser, getCreatePage,
    getUpdatePage, postUpdateUser, postDeleteUser, postRemoveUser
}