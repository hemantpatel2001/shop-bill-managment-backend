const mongoose = require("mongoose");
const Joi = require("joi");

const customerCounterSchema = Joi.object({
  name: Joi.string().min(3).max(50).messages({
    "string.base": "Name should be a string.",
    "string.empty": "Name is required.",
    "string.min": "Name should have at least 3 characters.",
    "string.max": "Name should have at most 50 characters.",
    "any.required": "Name is required.",
  }),
  city: Joi.string(),
  mobile: Joi.string()
    .pattern(/^[0-9]+$/) // Only allows digits
    .length(10) // Assumes mobile number is 10 digits long
    .messages({
      "string.base": "Mobile should be a string of digits.",
      "string.empty": "Mobile number is required.",
      "string.pattern.base": "Mobile number should contain only digits.",
      "string.length": "Mobile number should be exactly 10 digits.",
      "any.required": "Mobile number is required.",
    }),
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email format.",
    "any.required": "Email is required.",
  }),

});

module.exports = customerCounterSchema;
