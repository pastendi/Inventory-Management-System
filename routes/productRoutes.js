const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
  destination: 'assets/images/',
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  },
})
const upload = multer({ storage: storage })
const {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController')

router.route('/').post(upload.single('image'), createProduct).get(getAllProduct)

router
  .route('/:id')
  .get(getSingleProduct)
  .patch(upload.single('image'), updateProduct)
  .delete(deleteProduct)

module.exports = router
