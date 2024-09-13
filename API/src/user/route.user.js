const express = require("express");
const userController = require("./controller.user")
const customerRegistration = require("./controller.user")
const jwtToken = require("jsonwebtoken")


const router = express.Router();


router.post("/login",userController.login)
router.post("/create",userController.create)


module.exports = router;