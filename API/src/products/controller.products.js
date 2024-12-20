const productService = require("./service.products");
const productController = {};

//create a product
productController.createProduct = async (req, res) => {
  const { productName, productCode, img, MRP, sellingPrice, categoryId,costPrice } = req.body;

  try {
    const createProduct = await productService.createProduct({
      productName,
      productCode,
      img,
      MRP,
      sellingPrice,
      categoryId,
      costPrice
    });

    if (createProduct) {
      return res.status(201).send({
        status: true,
        msg: "Product created successfully",
        data: createProduct,
      });
    }
  } catch (error) {
    if (error.code === 11000) { 
      return res.status(409).send({
        status: false,
        msg: `Product with code '${productCode}' already exists.`,
      });
    } else {
      console.error(error);
      return res.status(500).send({
        status: false,
        msg: "An unexpected error occurred. Please try again later.",
      });
    }
  }
};




//get all products.
productController.getAllProducts = async (req, res) => {
  try {
    const getAllProducts = await productService.getAllProducts();
    if (!getAllProducts || getAllProducts.length === 0) {
      res.send({ status: "err", msg: "not get all productss" });
    }
    res.send({ status: "OK", msg: "get all products", data: getAllProducts });
  } catch (error) {
    res.send({ status: "error", msg: "server error" });
  }
};

//Get a single product by Id.

productController.getProductById = async (req, res) => {
  try {
    // Assuming getProductById is a service method to fetch product by ID
    const product = await productService.getProductById(req.params.id);

    // Check if the product exists
    if (!product) {
      return res.status(404).json({
        status: "err",
        msg: "Product not found",
      });
    }

    // Return the product data if found
    return res.status(200).json({
      status: "OK",
      msg: "Product retrieved successfully",
      data: product,
    });
  } catch (error) {
    // Log the error for debugging and return a server error response
    console.error(error);
    return res.status(500).json({
      status: "error",
      msg: "Internal server error",
    });
  }
};

// Update product details.
productController.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { productName, costPrice,  sellingPrice, categoryId, MRP } = req.body;

  console.log("Request body:", req.body); // Log the incoming data

  try {
    const updatedProduct = await productService.updateProduct(id, {
      productName,
      costPrice,
      sellingPrice,
      categoryId,
      MRP,
  });

    if (!updatedProduct) {
      return res.status(404).json({
        status: "false",
        msg: "Product not found or could not be updated",
      });
    }

    return res.status(200).json({
      status: "true",
      msg: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      msg: "Internal server error",
    });
  }
};



// //Delete a customer.
// productController.deleteProduct = async (req, res) => {
//   try {
//     const deleteProduct = await productService.deleteProduct(req.params.id);
//     if (!deleteCustomer) {
//       return res.send({ status: "err", msg: "product is not deleted" });
//     }
//     return res.send({ status: "OK", msg: "product is deleted" });
//   } catch (error) {
//     res.send({ status: "error", msg: "server error" });
//   }
// };
module.exports = productController;
