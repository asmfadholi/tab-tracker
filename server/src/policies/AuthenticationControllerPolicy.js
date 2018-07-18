const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }
    const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `the passwor wrong, please follow this:
              </br>
              1. it must containt angka dan huruf
              </br>
              2. it must more than 8 and not greater than 32
            `
          })
          break
        default:
          res.status(400).send({
            error: 'invalid registration information'
          })
          break
      }
    } else {
      next()
    }
  }
}
