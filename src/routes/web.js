const express = require("express")
const { getHomepage, getTest, postCreateUser } = require("../controllers/homeControllers")
const router = express.Router()


// router.Method("/route", handler)
router.get('/', getHomepage)
router.get('/test', getTest)
router.post("/create-user", postCreateUser)

module.exports = router //export defual 