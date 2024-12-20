const Joi=require("joi")
const categoryValidationSchema = Joi.object({
     
    categoryName: Joi.string()
    .trim()
    .min(3)  // Minimum length of 3 characters
    .max(50) // Maximum length of 50 characters
    .messages({
        'string.empty': 'Category is required',
    }),
})

module.exports = {
    categoryValidationSchema
  };