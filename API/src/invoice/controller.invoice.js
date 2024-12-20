const Invoice = require("./model.invoice"); 
const invoiceController={}
// Create invoice
invoiceController.createInvoice = async (req, res) => {
  try {
    const { customerId, invoiceNo, date, paidAmount, products } = req.body;

    // Validate required fields
    if (!customerId || !invoiceNo || !date || !paidAmount || !products) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create and save the new invoice
    const newInvoice = new Invoice({
      customerId,
      invoiceNo,
      date,
      paidAmount,
      products,
    });

    await newInvoice.save();

    res.status(201).json({ msg: "Invoice added successfully",   status: true ,invoice: newInvoice });
  } catch (error) {
    res.status(500).json({ msg: "Server error",  status: false,error: error.message });
  }
};

// Get all invoices with customer and product details, including total and due amounts
invoiceController.getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find()
      .populate("customerId") // Fetch all customer data
      .populate("products.productId"); // Fetch all product data

    // Add total amount and due amount for each invoice
    const formattedInvoices = invoices.map(invoice => {
      // Calculate total amount for all products in the invoice
      const totalAmount = invoice.products.reduce((sum, product) => {
        const productPrice = product.productId?.price || 0;
        return sum + productPrice * product.quantity;
      }, 0);

      // Calculate due amount
      const dueAmount = totalAmount - invoice.paidAmount;

      return {
        ...invoice._doc,
        totalAmount, 
        dueAmount,   
        products: invoice.products.map(product => ({
          ...product._doc,
          totalAmount: product.productId?.sellingPrice * product.quantity, // Total for each product
        })),
      };
      
    });

    res.status(200).json({
      msg: "Invoices fetched successfully",
      status: true,
      invoices: formattedInvoices,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Server error",
      status: false,
      error: error.message,
    });
  }
};

  

module.exports = invoiceController;
