const { hasSubscribers } = require('diagnostics_channel')
const express = require('express')
const hbs = require('hbs')
const path = require('path')
require('./db/mongoose')
const clientRouter = require('./routers/client')


// define path for express config
const viewspath = path.join(__dirname, '../views')
const partialsPath = path.join(__dirname, '../views/partials')

const app = express()
const port = process.env.PORT || 3000

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));
app.use(express.json())
app.use(clientRouter)

//setting up handlebars to work with dynamic templates
app.set('view engine', 'hbs')
app.set('views', viewspath)
hbs.registerPartials(partialsPath)





app.listen(port, () => {
    console.log('Server is up on port ' + port)
})