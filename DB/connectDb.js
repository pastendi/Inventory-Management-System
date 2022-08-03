const mongoose = require('mongoose')

const connectDb = (url) => {
  try {
    const connection = mongoose.connect(url)
    console.log('database connected')
    return connection
  } catch (error) {
    console.log(error)
  }
}
module.exports = connectDb
