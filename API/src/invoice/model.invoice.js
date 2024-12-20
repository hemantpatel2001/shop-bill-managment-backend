const { ref } = require("joi");
const mongoose = require("mongoose");
const invoiceSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "customer", required: true },
  invoiceNo: { type: String, required: true },
  date: { type: String, required: true },
  paidAmount: { type: Number, required: true },
  products: [
    {
      productId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true,
      },
      quantity: { type: Number, required: true, default: 1 },
    },
  ],
});

module.exports = mongoose.model("invoice", invoiceSchema);
