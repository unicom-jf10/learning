const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./Policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register'
    , AuthenticationControllerPolicy.register
    , AuthenticationController.register)
}
/*
module.exports = (app) => {
  app.post('/register', (req, res) => {
    console.log(req.body)
    res.send({
      message: `hello, ${req.body.email}! Your user was registered`
    })
  })
}
*/
