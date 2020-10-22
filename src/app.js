const express = require('express')
const morgan = require('morgan')
const app = express()

//Settings
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Routes
app.use('/api/products',require('./routes/productsRoutes'))

module.exports = app