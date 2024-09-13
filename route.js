const router = require("express").Router()

//user route
const userRoute = require("./API/src/user/route.user")
router.use("/user",userRoute)

//customer route
const customerRoute = require("./API/src/customer/route.customer")
router.use("/customer",customerRoute)

//product route
const productRoute = require("./API/src/products/route.products")
router.use("/products", productRoute)

// //invoice route
// const invoiceRoute = require("./API/src/invoice/route.invoice")
// router.use("/invoice", invoiceRoute)

module.exports = router;