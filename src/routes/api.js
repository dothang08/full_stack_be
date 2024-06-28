const express = require("express")
const routerAPI = express.Router()

const { getUsersAPI } = require("../controllers/apiController")

routerAPI.get('/', (req, res) => {
    res.send("Hello word API")
})


routerAPI.get('/users', getUsersAPI)

module.exports = routerAPI //export defual 