const express = require("express")
const { getHomepage, getTest, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser } = require("../controllers/homeControllers")
const router = express.Router()

// router.Method("/route", handler)
router.get('/', getHomepage)
router.get('/test', getTest)
router.get("/create", getCreatePage)
router.post("/create-user", postCreateUser)
router.post("/update-user", postUpdateUser)
router.get("/edit/:id", getUpdatePage) // là Update trong video


module.exports = router //export defual 