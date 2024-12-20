const { ref, required } = require("joi");
const mongoose = require("mongoose");
const { type } = require("../vendorschemas/validation.vendorschemas");
const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  costPrice:{
    type:String,
    required:true
  },
  productCode: {
    type: String,
    required: true,
    unique: true,
  },
  img: {
    type: String,
    require: true,
  },

  MRP: {
    type: Number,
    required: true,
  },
  sellingPrice: {
    type: Number,
    required: true,
  },
  categoryId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"category",
    required:true
  }
});

module.exports =mongoose.model ("products", productSchema);
