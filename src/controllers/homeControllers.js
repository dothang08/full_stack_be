const connection = require("../config/database")
const getHomepage = (req, res) => {
    //process data
    //Call model
    res.send('Hello World! and Nodemon')
}

const getTest = (req, res) => {
    res.render("sample.ejs")
}
module.exports = {
    getHomepage, getTest
}