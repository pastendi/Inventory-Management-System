const express = require('express')
const app = express()
const connectDb = require('./DB/connectDb')
const productRouter = require('./routes/productRoute')
require('dotenv').config()

app.get('/', (req, res) => {
  res.send('<h1>The server is working fine</h1>')
})

app.use('/api/products', productRouter)

const port = process.env.PORT || 3000

const startServer = async () => {
  try {
    await connectDb(process.env.MONGO_URL)
    app.listen(port, console.log(`Server is listening at port ${port}....`))
  } catch (err) {
    console.log(err)
  }
}
startServer()
