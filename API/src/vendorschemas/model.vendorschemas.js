const mongoose = require("mongoose");
const { type, required } = require("./validation.vendorschemas");

const vendorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "user",
    //     required: true,
    // },
    // email:{
    //   type:String,
    //   required:true
    // }
});

module.exports = mongoose.model("vendorschemas", vendorSchema);
