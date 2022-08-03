const mongoose = require('mongoose')
const { PRODUCT_CATEGORY } = require('../enum')
const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      maxlength: [50, 'Product name cannot be more that 50 characters'],
    },
    price: {
      type: Number,
    },
    image: {
      type: String,
    },
    detail: {
      type: String,
      maxlength: [500, 'Product detail cannot be more that 500 characters'],
    },
    category: {
      type: String,
      enum: PRODUCT_CATEGORY, // only value in this array can be used in dropdown body while filter and this is global variable thus is all capital and it is imported from the -->enum<-- folder
    },
    stock: {
      type: Number,
    },
    saleCount: {
      type: Number,
    },
  },
  { timestamps: true } //gives us createdAt and updatedAt automatically
)
module.exports = mongoose.model('Product', productSchema)
