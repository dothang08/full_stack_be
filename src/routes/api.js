const express = require("express")
const routerAPI = express.Router()

const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI,
    postUploadSingleFileApi, postUploadMultipleFilesAPI, } = require("../controllers/apiController")

const { postCreateCustomer, postCreateArrayCustomer } = require("../controllers/customerControllers")

routerAPI.get('/users', getUsersAPI)
routerAPI.post('/users', postCreateUserAPI)
routerAPI.put('/users', putUpdateUserAPI)
routerAPI.delete('/users', deleteUserAPI)

routerAPI.post('/file', postUploadSingleFileApi)
routerAPI.post('/file', postUploadMultipleFilesAPI)

routerAPI.post('/customers', postCreateCustomer)
routerAPI.post('/customers-many', postCreateArrayCustomer)
module.exports = routerAPI //export defual 