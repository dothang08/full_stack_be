const getHomepage = (req, res) => {
    res.send('Hello World! and Nodemon')
}

const getTest = (req, res) => {
    res.render("sample.ejs")
}
module.exports = {
    getHomepage, getTest
}