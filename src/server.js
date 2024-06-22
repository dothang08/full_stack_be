const express = require('express')
const path = require("path")
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8888 //port == hardcode   .uat  .prod
const hostname = process.env.HOST_NAME

// Config tempalte engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//Config static file
app.use(express.static(path.join(__dirname, 'public')))

//Khai báo route
app.get('/', (req, res) => {
    res.send('Hello World! and Nodemon')
})

app.get('/test', (req, res) => {
    // res.send('<h1>Do Thang 08</h1>')
    res.render("sample.ejs")
})



app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
