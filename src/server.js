require('dotenv').config()
const express = require('express')
const configViewEngine = require("./config/viewEngine")
const webRoutes = require("./routes/web")
const connection = require("./config/database")
const mongoose = require("mongoose")

const app = express()
const port = process.env.PORT || 8888 //port == hardcode   .uat  .prod
const hostname = process.env.HOST_NAME

//Config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//Config template engine
configViewEngine(app)

//Khai báo route
app.use("/", webRoutes)

const kittySchema = new mongoose.Schema({
    name: String
});
const Kitten = mongoose.model('Kitten', kittySchema);
const cat = new Kitten({ name: 'DoThang Cat' });
cat.save()

    ; (async () => {
        //test connention
        try {
            await connection();
            app.listen(port, hostname, () => {
                console.log(`Example app listening on port ${port}`)
            })

        } catch (error) {
            console.log("ERROR Connect to do", error);
        }
    })() //self running Function

