import express from 'express'
import bodyParser from 'body-parser'
import { connect } from './config/database.js'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

import apiRoutes from './routes/index.js'

app.use('/api', apiRoutes)

app.listen(3000, async () => {
    console.log('Server started')
    await connect()
    console.log('MongoDB Connected');
})