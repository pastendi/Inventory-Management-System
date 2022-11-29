const mongoose = require('mongoose')
const inventorySchema = new mongoose.Schema({
  _id: {
    type: String,
    required: [true, 'product id must be supplied'],
  },
  stock: {
    type: Number,
    default: 0,
  },
  sales: {
    type: Number,
  },
})
module.exports = mongoose.model('Inventory', inventorySchema)
