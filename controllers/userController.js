const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnAuthenticatedError } = require('../errors')

const allUser = async (req, res) => {
  const users = await User.find()
  res.status(StatusCodes.OK).json(users)
}

const updateUser = async (req, res) => {
  const { email, firstName, lastName, password } = req.body
  if (!email || !firstName || !lastName || !password) {
    throw new BadRequestError('Please provide all values')
  }
  const user = await User.findOne({ _id: req.user.userId })
  user.email = email
  user.firstName = firstName
  user.lastName = lastName
  user.password = password

  await user.save()

  res.status(StatusCodes.OK).json(user)
}

module.exports = { allUser, updateUser }
