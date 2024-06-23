const express = require("express")
const { getHomepage, getTest } = require("../controllers/homeControllers")
const router = express.Router()


// router.Method("/route", handler)
router.get('/', getHomepage)
router.get('/test', getTest)
router.post("/create-user", (req, res) => { res.send("Create a new user") })

module.exports = router //export defual 