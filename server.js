const express = require('express')
const app = express()
require('express-async-errors')
const connectDb = require('./DB/connectDb')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())

const overviewRouter = require('./routes/overviewRoutes')
const productRouter = require('./routes/productRoutes')
const authRouter = require('./routes/authRoutes')
const userRouter = require('./routes/userRoutes')
const inventoryRouter = require('./routes/inventoryRoutes')
require('dotenv').config()

app.get('/', (req, res) => {
  res.send('<h1>The server is working fine</h1>')
})

app.use('/api/overview', overviewRouter)
app.use('/api/inventory', inventoryRouter)
app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

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
