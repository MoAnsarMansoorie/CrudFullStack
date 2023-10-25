// URL PATH

const express = require("express")
const { home, createUser, editUser, deleteUser } = require("../controllers/userControllers")
const router = express.Router()


router.get("/", home)
router.post("/createUser", createUser)
router.put("/editUser", editUser)
router.delete("/deleteUser", deleteUser)

module.exports = router