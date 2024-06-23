require('dotenv').config()
const express = require('express')
const configViewEngine = require("./config/viewEngine")
const webRoutes = require("./routes/web")
const connection = require("./config/database")

const app = express()
const port = process.env.PORT || 8888 //port == hardcode   .uat  .prod
const hostname = process.env.HOST_NAME

//Config template engine
configViewEngine(app)

//Khai báo route
app.use("/", webRoutes)

//Test connection


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
