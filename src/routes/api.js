const express = require("express")
const routerAPI = express.Router()

const { getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI,
    postUploadSingleFileApi, postUploadMultipleFilesAPI, } = require("../controllers/apiController")

const { postCreateCustomer, postCreateArrayCustomer
    , getAllCustomers } = require("../controllers/customerControllers")

routerAPI.get('/users', getUsersAPI)
routerAPI.post('/users', postCreateUserAPI)
routerAPI.put('/users', putUpdateUserAPI)
routerAPI.delete('/users', deleteUserAPI)

routerAPI.post('/file', postUploadSingleFileApi)
routerAPI.post('/file', postUploadMultipleFilesAPI)

routerAPI.post('/customers', postCreateCustomer)
routerAPI.post('/customers-many', postCreateArrayCustomer)

routerAPI.get('/customers', getAllCustomers)

module.exports = routerAPI //export defual 