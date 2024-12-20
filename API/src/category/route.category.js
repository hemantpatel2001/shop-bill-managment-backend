const router =require("express").Router()
const categoryController = require('./controller.category')
const {categoryValidationSchema} = require("../category/validation.category")
const validate = require("../middleware/validationMiddleware")

router.post('/add-category', validate(categoryValidationSchema), categoryController.createCategory)
router.get('/get-category-by-id/:id', categoryController.getCategoryById)
router.get('/get-all-category', categoryController.getAllCategory)
router.delete('/delete-category/:id', categoryController.deleteCategory)
router.patch('/update-category/:id',validate(categoryValidationSchema), categoryController.updateCategory)

module.exports = router