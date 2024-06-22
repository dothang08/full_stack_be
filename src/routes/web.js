const express = require("express")
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Hello World! and Nodemon')
})

router.get('/test', (req, res) => {
    // res.send('<h1>Do Thang 08</h1>')
    res.render("sample.ejs")
})

module.exports = router //export defual 