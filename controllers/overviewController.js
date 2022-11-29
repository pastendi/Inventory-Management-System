const Product = require('../models/product')
const { StatusCodes } = require('http-status-codes')
const User = require('../models/User')
const Inventory = require('../models/Inventory')
const getStat = async (req, res) => {
  const product = await Product.count()
  const outOfStock = await Inventory.find({ quantity: 0 }).count()
  const user = await User.count()
  res.status(StatusCodes.OK).json({ product, outOfStock, user })
}
module.exports = { getStat }
