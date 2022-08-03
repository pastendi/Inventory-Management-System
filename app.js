const express = require('express')
const app = express()
const connectDb = require('./DB/connectDb')
require('dotenv').config() //allows us to reach to the variable in .env file

//middlewares
//url just for checking if the server is working
app.get('/', (req, res) => {
  res.send('<h1>The server is working fine</h1>')
})

//port for server
const port = process.env.PORT || 3000

//setting the sever startup
const startServer = async () => {
  try {
    await connectDb(process.env.MONGO_URL)
    app.listen(port, console.log(`Server is listening at port ${port}....`))
  } catch (err) {
    console.log(err)
  }
}
startServer()
