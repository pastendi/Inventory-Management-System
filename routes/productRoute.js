const express = require('express')
const router = express.Router()
const {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require('./../controllers/productController')

router.route('/').post(createProduct).get(getAllProduct)

router
  .route('/:id')
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct)

module.exports = router
