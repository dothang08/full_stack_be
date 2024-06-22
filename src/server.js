require('dotenv').config()
const express = require('express')
const configViewEngine = require("./config/viewEngine")


const app = express()
const port = process.env.PORT || 8888 //port == hardcode   .uat  .prod
const hostname = process.env.HOST_NAME
const webRoutes = require("./routes/web")

//Config template engine
configViewEngine(app)

//Khai báo route
app.use("/", webRoutes)



app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
