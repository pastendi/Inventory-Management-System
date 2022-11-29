const Product = require('../models/product')
const Inventory = require('../models/Inventory')
const { StatusCodes } = require('http-status-codes')
const fs = require('fs')
const path = require('path')
const {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} = require('../errors')

const createProduct = async (req, res) => {
  const product = await Product.create(req.body)
  const product_id = product._id
  await Inventory.create({ _id: product_id })
  res.status(StatusCodes.CREATED).json(product)
}
const getAllProduct = async (req, res) => {
  const { category, sort, search } = req.query
  searchObject = {}
  if (category && category !== 'all') searchObject.category = category
  if (search) searchObject.name = { $regex: search, $options: 'i' }
  let result = Product.find(searchObject)
  if (sort == 'latest') result = result.sort('-createdAt')
  if (sort == 'oldest') result = result.sort('createdAt')
  if (sort == 'a-z') result = result.sort('name')
  if (sort == 'z-a') result = result.sort('-name')

  const page = Number(req.query.page) || 1
  const limit = 10
  const skip = (page - 1) * limit
  result = result.skip(skip).limit(limit)
  const products = await result
  const totalProducts = await Product.countDocuments(searchObject)
  const numOfPages = Math.ceil(totalProducts / limit)
  res.status(StatusCodes.OK).json({ products, numOfPages, totalProducts })
}
const getSingleProduct = async (req, res) => {
  const product = await Product.findById(req.params.id)
  res.status(StatusCodes.OK).json(product)
}
const updateProduct = async (req, res) => {
  const updateProduct = await Product.findByIdAndUpdate(req.body.id, req.body, {
    new: true,
  })
  res.status(200).json(updateProduct)
}
const deleteProduct = async (req, res) => {
  await Product.findOneAndDelete(req.body)
  res.status(StatusCodes.OK).json('Product deleted successfully')
}

module.exports = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
}
