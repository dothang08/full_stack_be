const express = require("express")
const routerAPI = express.Router()

const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI } = require("../controllers/apiController")


routerAPI.get('/users', getUsersAPI)
routerAPI.post('/users', postCreateUserAPI)
routerAPI.put('/users', putUpdateUserAPI)
module.exports = routerAPI //export defual 