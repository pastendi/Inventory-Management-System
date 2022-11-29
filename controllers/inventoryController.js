const Inventory = require('../models/Inventory')
const { StatusCodes } = require('http-status-codes')
const addStock = async (req, res) => {
  const stock = await Inventory.create(req.body)
  res.status(StatusCodes.OK).json(stock)
}
module.exports = { addStock }
