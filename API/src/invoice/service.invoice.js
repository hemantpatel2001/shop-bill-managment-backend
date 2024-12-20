const Invoice = require("./model.invoice"); // Adjust the path as per your project structure
const invoiceService = {};

invoiceService.createInvoice = async ({ customerId, invoiceNo, date, paidAmount, products }) => {
  // Create and save the invoice
  const create = await Invoice.create({
    customerId,
    invoiceNo,
    date,
    paidAmount,
    products,
  });

  return create;
};
//get all invoice
invoiceService.getAllInvoices = async () => {
  const invoices = await Invoice.find()
    .populate("customerId") 
    .populate("products.productId"); 

  return invoices;
};

  

module.exports = invoiceService;
