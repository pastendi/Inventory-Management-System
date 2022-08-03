const Product = require('../models/product')
const { StatusCodes } = require('http-status-codes')

const createProduct = async (req, res) => {
  //logic for creating product
  res.send('creat product')
}
const getAllProduct = async (req, res) => {
  //logic for getting every product
  res.send('gets all product')
}
const getSingleProduct = async (req, res) => {
  //logic for finding single product
  res.send('find single product')
}
const updateProduct = async (req, res) => {
  //logic for updating product
  res.send('create product')
}
const deleteProduct = async (req, res) => {
  //logic for deleting product
  res.send('delete product')
}

module.exports = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
}
