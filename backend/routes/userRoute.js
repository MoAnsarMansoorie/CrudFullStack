// URL PATH

const express = require("express")
const { home, createUser, editUser, deleteUser, getUser } = require("../controllers/userControllers")
const router = express.Router()


router.get("/", home)
router.post("/createUser", createUser)
router.get("/getUser", getUser)
router.put("/editUser/:id", editUser)
router.delete("/deleteUser/:id", deleteUser)

module.exports = router