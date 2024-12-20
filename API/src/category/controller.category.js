const categoryService = require("./service.category");

const categoryController = {};

categoryController.createCategory = async (req, res) => {
  try {
    // const categoryData = req.body;

    const { categoryName } = req.body;
    console.log(categoryName);

    const isAlreadyExist = await categoryService.find({
      categoryName: { $regex: new RegExp(`^${categoryName}$`, "i") },
      isDeleted: false,
    });

    if (isAlreadyExist) {
      return res.send({
        status: false,
        message: "Category already exists",
      });
    } else {
      const savedCategory = await categoryService.add(categoryName);

      return res.send({
        status: true,
        message: "Category created successfully",
        data: savedCategory,
      });
    }
  } catch (error) {
    console.log(error);
    return res.send({
      status: false,
      message: error.message || "Something went wrong",
    });
  }
};

categoryController.getAllCategory = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const getCategories = await categoryService.get(skip, limit);
    const totalData = await categoryService.countAll();

    if (getCategories.length) {
      return res.send({
        status: true,
        message: "Categories retrieved successfully.",
        data: getCategories,
        totalData,
        totalPages: Math.ceil(totalData / limit),
        currentPage: page,
      });
    } else {
      return res.send({
        status: false,
        message: "Categories not found.",
        data: getCategories,
      });
    }
  } catch (error) {
    return res.send({
      status: false,
      message:
        "Oops! Something went wrong while fetching categories. Please try again later.",
      error: error.message,
    });
  }
};

categoryController.getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const getCategories = await categoryService.find({
      _id: id,
      isDeleted: false,
    });

    if (getCategories) {
      return res.status(200).json({
        status: true,
        message: "Category retrieved successfully.",
        data: getCategories,
      });
    } else {
      return res.status(404).json({
        status: false,
        message: "Category not found or has been deleted.",
        data: null,
      });
    }
  } catch (error) {
    return res.send({
      status: false,
      message:
        "Oops! Something went wrong while fetching the category. Please try again later.",
      error: error.message, // Optional, for debugging purposes
    });
  }
};

categoryController.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteCategoty = await categoryService.findOneAndUpdate(
      { _id: id, isDeleted: false },
      { isDeleted: true },
      { new: true }
    );

    if (!deleteCategoty) {
      return res.status(404).json({
        status: false,
        message: "Category not found or already deleted.",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Category deleted successfully.",
      data: deleteCategoty._id,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "ERR",
      message: "Something went wrong. Please try again later.",
      data: null,
    });
  }
};

categoryController.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { categoryName } = req.body;

    const existingCategory = await categoryService.find({
      categoryName: { $regex: new RegExp(`^${categoryName}$`, "i") },
      _id: { $ne: id },
      isDeleted: false,
    });

    if (existingCategory) {
      return res.status(400).json({
        status: false,
        message: `Category name "${categoryName}" already exists. Please use a different name.`,
      });
    }

    const updateCategory = await categoryService.findOneAndUpdate(
      { _id: id, isDeleted: false },
      { categoryName },
      { new: true }
    );

    if (!updateCategory) {
      return res.status(404).json({
        status: false,
        message: "Category not found. Check the ID or if it was deleted.",
      });
    }

    return res.send({
      status: true,
      message: "Category updated successfully!",
      data: updateCategory,
    });
  } catch (error) {
    return res.send({
      status: false,
      message:
        "Oops! Something went wrong while updating the category. Please try again.",
      data: null,
    });
  }
};

module.exports = categoryController;
