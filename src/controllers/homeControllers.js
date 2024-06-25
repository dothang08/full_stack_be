const connection = require("../config/database")
const { getAllUsers, getUserByID, updateUserbyID } = require("../service/CRUDservice")

const getHomepage = async (req, res) => {
    let results = await getAllUsers()
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
    let user = await getUserByID(userID)
    res.render("edit.ejs", { userEdit: user }) // lấy y gán cho x  : x <- y

}


const postCreateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.myName
    let city = req.body.city
    // let{emai, name, city} = req.body
    console.log("Email: ", email, "Name: ", name, "City: ", city, "UserID: ",);
    // connection.query(
    //     `INSERT INTO 
    //     Users(email, name, city)
    //     VALUES(?, ?, ?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         console.log(results);
    //         res.send("Create user succeed! ")
    //     }
    // )
    let [results, fields] = await connection.query(
        `INSERT INTO Users(email, name, city) VALUES(?, ?, ?)`, [email, name, city],
    )
    res.send("Create user succeed! ")
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.myName
    let city = req.body.city
    let userID = req.body.userID
    // let{emai, name, city} = req.body
    await updateUserbyID(email, city, name, userID)
    // res.send("Updated user succeed! ")
    res.redirect("/")
}

module.exports = {
    getHomepage, getTest, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser
}