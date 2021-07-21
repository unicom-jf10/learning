const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    /*
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
        // '^[a-zA-Z0-9]{8,32}$'
      )
    }
    */
    const regEx = '^[a-zA-Z0-9]{8,32}$'
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp(regEx)
      )
    }

    // const { error, value } = Joi.validate(req.body, schema)
    const { error } = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'invalid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'password length at least 8, most 32'
          })
          break
        default:
          res.status(400).send({
            error: 'invalid info'
          })
      }
    } else {
      next()
    }
  }
}
