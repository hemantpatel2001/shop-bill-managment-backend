// const invoiceService = require ("./service.invoice")
// const invoiceController = {}
// // Search invoices by mobile number
// invoiceController.searchByMobile = async (req, res) => {
//   const { mobile } = req.params;
//   console.log(mobile)

//   try {
//     const invoices = await invoiceService.searchByMobile(mobile);
//     if (invoices.length === 0) {
//       return res.send({ status: 'ERROR', message: 'No invoices found for this mobile number', data : invoices});
//     }
//     res.send({ status: 'OK', data: invoices });
//   } catch (error) {
//     res.send({ status: 'ERROR', message: 'Server error', error });
//   }
// }

// // Get invoice by ID
// invoiceController.getInvoiceById = async (req, res) => {
//   const { invoiceId } = req.params;

//   try {
//     const invoice = await invoiceService.getInvoiceById(invoiceId);
//     if (!invoice) {
//       return res.send({ status: 'ERROR', message: 'Invoice not found' });
//     }
//     res.send({ status: 'OK', data: invoice });
//   } catch (error) {
//     res.send({ status: 'ERROR', message: 'Server error', error });
//   }
// };

// // Delete invoice by ID
// invoiceController.deleteInvoiceById = async (req, res) => {
//   const { invoiceId } = req.params;

//   try {
//     const deletedInvoice = await invoiceService.deleteInvoiceById(invoiceId);
//     if (!deletedInvoice) {
//       return send({ status: 'ERROR', message: 'Invoice not found' });
//     }
//     res.send({ status: 'OK', message: 'Invoice deleted successfully' });
//   } catch (error) {
//     res.send({ status: 'ERROR', message: 'Server error', error });
//   }
// };
  


// module.exports = invoiceController