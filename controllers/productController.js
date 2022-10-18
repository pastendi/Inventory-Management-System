const Product = require('../models/product')
const { StatusCodes } = require('http-status-codes')
const fs = require('fs')
const path = require('path')
const {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} = require('../errors')

const createProduct = async (req, res) => {
  const product = await Product.create({ ...req.body, image: req.file.path })
  res.status(StatusCodes.CREATED).json(product)
}
const getAllProduct = async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 })
  res.status(StatusCodes.OK).json(products)
}
const getSingleProduct = async (req, res) => {
  const product = await Product.findById(req.params.id)
  res.status(StatusCodes.OK).json(product)
}
const updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id)
  const image_src = product.image
  if (req.file) {
    req.body.image = req.file.path
    fs.unlinkSync(path.resolve(__dirname, '../' + image_src))
  }
  const updateProduct = await Product.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  )
  res.status(200).json(updateProduct)
}
const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id)
  res.status(StatusCodes.OK).json('Product deleted successfully')
}

module.exports = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
}
