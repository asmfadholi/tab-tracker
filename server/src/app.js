console.log('hello ajah')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')
const {sequelize} = require('./models')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

// get
// post
// put
// patch
// delete

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`server started on port ${config.port}`)
  })
// app.listen(process.env.PORT || 8088)
