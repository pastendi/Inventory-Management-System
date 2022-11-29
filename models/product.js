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
    detail: {
      type: String,
      maxlength: [500, 'Product detail cannot be more that 500 characters'],
    },
    category: {
      type: String,
      enum: ['food', 'electronic', 'jewelry', 'clothes', 'utensils', 'sport'],
    },
  },
  { timestamps: true }
)
module.exports = mongoose.model('Product', productSchema)
