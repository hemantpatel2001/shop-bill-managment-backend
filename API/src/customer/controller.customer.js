const customerService = require("./service.customer");
const customerController = {};

//create customer.
customerController.registration = async (req, res) => {
  try {
    const { name, mobile, email, city } = req.body;
    
    const customerFind = await customerService.findByEmailAndMobile({
      email,
      mobile,
    });

    console.log(customerFind , "Here")
    if (customerFind.length) {
     return res.send({ status: "err", msg: "customer already exist", data: null });
    }

    const registration = await customerService.createCustomer({
      name,
      mobile,
      email,
      city,
    });
    // console.log(registration,"registration");

    if (registration) {
      return res.send({
        status: "ok",
        msg: "customer create successfully",
        data: registration,
      });
    }
  } catch (error) {
    console.log(error);
    return res.send ({status: "err", msg: "server side error"}) 
  }
};


// customerController.registration=async (req,res) => {
//   try {
//     const{name,mobile,email,city}=req.body
//     const addCustomer=await customerService.creatCostumer({name,mobile,email,city})
//    console.log(addCustomer,"name")
   
//     res.send({
//       status:"ok",
//       msg:"customer added successfully",
//       data:addCustomer
//     })
//   } catch (error) {
//     console.log(error)
//     res.send({
//       status:"Error",
//       msg:"Something went wrong"
//     })
//   }
// }
//Get all customers.
customerController.getAllCustomer = async (req, res) => {
  try {
    const getAllCustomers = await customerService.getAllCustomers();
    if (!getAllCustomers || getAllCustomers.length === 0) {
      res.send({ status: "err", msg: "not get all customers" });
    }
    res.send({ status: "OK", msg: "get all customers", data: getAllCustomers });
  } catch (error) {
    res.send({ status: "err", msg: "server error" });
  }
};
//Get a single customer by Id.
customerController.getCustomerById = async (req, res) => {
  try {
    const getCustomerById = await customerService.getCustomerById(
      req.params.id
    );
    if (!getCustomerById) {
      res.send({ status: "err", msg: "customer is not get" });
    }
    res.send({ status: "OK", msg: "get customer", data: getCustomerById });
  } catch (error) {
    res.send({ status: "err", msg: "server error" });
  }
};

// Update customer details.
customerController.updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { name, mobile, email, city } = req.body;
  try {
    const updateCustomer = await customerService.updateCustomer(id, {
      name,
      mobile,
      email,
      city,
    });
    if (!updateCustomer) {
      return res.send({ status: "err", msg: "customer not update" });
    }
    return res.send({
      status: "OK",
      msg: "customer update successful",
      data: updateCustomer,
    });
  } catch (error) {
    console.log(error);
    res.send({ status: "error", msg: "server error" });
  }
};

//Delete a customer.
customerController.deleteCustomer = async (req, res) => {
  try {
    const deleteCustomer = await customerService.deleteCustomer(req.params.id);
    if (!deleteCustomer) {
      return res.send({ status: "err", msg: "customer is not deleted" });
    }
    return res.send({ status: "OK", msg: "customer is deleted" });
  } catch (error) {
    res.send({ status: "error", msg: "server error" });
  }
};
//find customer by email and mobile.
// try {
//   const findCustomerByEmailandMobile = async (email,mobile) => {

//   if (findCustomerByEmailandMobile){
//     return res.send({status:"Ok", msg:"customer already exist"})
//   }}
// } catch (error) {
//   res.send({ status: "error", msg: "server error" });
// }

module.exports = customerController;
