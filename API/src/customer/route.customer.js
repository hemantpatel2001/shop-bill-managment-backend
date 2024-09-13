const router=require("express").Router()
const customerController = require("./controller.customer");
 const validate = require("../middleware/validationMiddleware")
const customerCounterSchema = require("./validation.customer")


// const router = express().Router();

// Routes for CRUD operations

// Route for registration.
router.post("/register",validate(customerCounterSchema),  customerController.registration);

// Route for all customer details.
router.get("/allCustomerDetails", customerController.getAllCustomer);

//Route for single customer detail.
router.get("/singleCustomer/:id", customerController.getCustomerById);

// Route for customer edit.
router.put("/update/:id", customerController.updateCustomer);


// Route for customer delete.
router.delete("/delete/:id", customerController.deleteCustomer);



module.exports = router;
