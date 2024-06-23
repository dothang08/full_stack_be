const connection = require("../config/database")
const getHomepage = (req, res) => {
    return res.render("home.ejs")
}

const getTest = (req, res) => {
    res.render("sample.ejs")
}

const postCreateUser = (req, res) => {
    let email = req.body.email
    let name = req.body.myName
    let city = req.body.city
    // let{emai, name, city} = req.body
    console.log("Email: ", email, "Name: ", name, "City: ", city);

    connection.query(
        `INSERT INTO 
        Users(email, name, city)
        VALUES(?, ?, ?)`,
        [email, name, city],
        function (err, results) {
            console.log(results);
            res.send("Create user succeed! ")
        }
    )
}

module.exports = {
    getHomepage, getTest, postCreateUser
}