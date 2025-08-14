import express from 'express'
import bodyParser from 'body-parser'
import passport from 'passport'

import { connect } from './config/database.js'

import { passportAuth } from './config/jwt-middleware.js'

import { PORT } from './config/serverConfig.js'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(passport.initialize())
passportAuth(passport)

import apiRoutes from './routes/index.js'

app.use('/api', apiRoutes)

app.listen(PORT, async () => {
    console.log('Server started')
    await connect()
    console.log('MongoDB Connected');
})