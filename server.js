const express = require("express")
const colors = require("colors")
const morgan = require("morgan")
const dotenv = require("dotenv")

// rest object
const app = express()
// middleware
app.use(morgan('dev'))
// parsing
app.use(express.json())

//port
const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${port}`
      .bgCyan.white
  )
})