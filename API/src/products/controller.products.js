const productService = require("./service.products");
const productController = {};

//create a product
productController.createProduct = async (req,res) => {
  try {
    const createProduct = await productController.createProduct()
    if (createProduct){
      res.send ({status:"ok", msg:"product create successfully"})
    }
  } catch (error) {
    
  }
  
}

// //get all products.
// productController.getAllProducts = async (req, res) => {
//   try {
//     const getAllProducts = await productService.getAllProducts();
//     if (!getAllProducts || getAllProducts.length === 0) {
//       res.send({ status: "err", msg: "not get all productss" });
//     }
//     res.send({ status: "OK", msg: "get all products", data: getAllProducts });
//   } catch (error) {
//     res.send({ status: "error", msg: "server error" });
//   }
// };

// //Get a single product by Id.
// productController.getProductById = async (req, res) => {
//   try {
//     const getProductById = await getProductById.getProductById(req.params.id);
//     if (!getProductById) {
//       res.send({ status: "err", msg: "product is not get" });
//     }
//     res.send({ status: "OK", msg: "get customer", data: getProductById });
//   } catch (error) {
//     res.send({ status: "error", msg: "server error" });
//   }
// };
// // Update customer details.
// productController.updateProduct = async (req, res) => {
//   const { id } = req.params;
//   const { productName, quantity, price, total } = req.body;
//   try {
//     const updateProduct = await productService.updateProduct(id, {
//       productName,
//       quantity,
//       price,
//       total,
//     });
//     if (!updateProduct) {
//       return res.send({ status: "err", msg: "product not update" });
//     }
//     return res.send({
//       status: "OK",
//       msg: "product update successful",
//       data: updateProduct,
//     });
//   } catch (error) {
//     console.log(error);
//     res.send({ status: "error", msg: "server error" });
//   }
// };

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
