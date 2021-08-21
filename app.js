const express = require('express')
const logger = require('morgan')

const swaggerGenerator = require('./API-docs/express-swagger')
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', indexRouter)
app.use('/users', usersRouter)

swaggerGenerator(app)

module.exports = app
