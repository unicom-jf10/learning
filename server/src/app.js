const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
/*
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
*/
app.post('/register', (req, res) => {
  console.log(req.body)
  res.send({
    message: `hello, ${req.body.email}! Your user was registered`
  })
})

app.listen(process.env.PORT || 8081)
