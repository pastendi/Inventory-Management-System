const mongoose = require('mongoose')
const productSchema = new mongoose.Schema(
  {
    name: {
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
      enum: ['food', 'electronic', 'jewelery', 'clothes', 'utensils'],
    },
  },
  { timestamps: true }
)
module.exports = mongoose.model('Product', productSchema)
