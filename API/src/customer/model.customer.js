const mongoose = require("mongoose");

//customer schema
const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
      // unique: true,
    },
    email: {
      type: String,
      required: true,
      // unique: true,
    },
    city: {
      type: String,
      require: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("customer", customerSchema);
