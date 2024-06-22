const express = require("express")
const { getHomepage, getTest } = require("../controllers/homeControllers")
const router = express.Router()


// router.Method("/route", handler)
router.get('/', getHomepage)
router.get('/test', getTest)

module.exports = router //export defual 