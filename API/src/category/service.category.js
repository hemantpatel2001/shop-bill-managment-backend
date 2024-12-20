const Category = require('./model.category')

const categoryService = {};

categoryService.add = async (categoryName) => {
 return await Category.create({categoryName})
}

categoryService.get = async (skip, limit) => {
  return await Category.find({ isDeleted: false }).skip(skip).limit(limit);
}

categoryService.countAll = async () => {
  return await Category.countDocuments({ isDeleted: false });
};

categoryService.find = async (query) => {
  return await Category.findOne(query)
}

categoryService.findOneAndUpdate = async (query, update, options = {}) =>{
  return await Category.findOneAndUpdate(query, update, options)
 }

module.exports = categoryService