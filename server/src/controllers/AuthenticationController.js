const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentification.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
      // res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'this email account is already in use bayy'
      })
    }
  },
  async login(req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if(!user) {
        return res.status(403).send({
          error: 'Salah ya bro'
        })
      }

      const isPasswordValid = await user.comparePassword(password)
      if(!isPasswordValid) {
        return res.status(403).send({
          eerror: 'Salah ya bro'
        })
      }

      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch(err) {
      res.status(403).send({
        error: 'ga bisa login nih error'
      })
    }
  }
}
