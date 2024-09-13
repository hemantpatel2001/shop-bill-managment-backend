const customer = require("./model.customer");
const customerService = {};

//customer create.
customerService.createCustomer = async ({ name, mobile, email, city }) => {
 
  const create = await customer.create({ name, mobile, email, city });
  // console.log(create, "create");
  // if (create) {
    return create
  }
// customerService.creatCostumer=async (name,mobile,email,city) => {
//   return await customer.create({name,mobile,email,city})
// }
  customerService.findByEmailAndMobile = async({email,mobile})=>{
const existingCustomer = await customer.find({email, mobile})
return existingCustomer
  }

//Get all customer by ID.
customerService.getAllCustomers = async () => {
    return await customer.find();
  };

  //Get a single customer by ID.
customerService.getCustomerById = async (customerId) => {
    return await customer.findById(customerId);
  };
  
  
// Update customer details.
customerService.updateCustomer = async (customerId, updateData) => {
  return await customer.findByIdAndUpdate(customerId, updateData, {
    new: true,
  });
};

//Delete customer details.
customerService.deleteCustomer = async (customerId) => {
  return await customer.findByIdAndDelete(customerId);
};



module.exports = customerService;
