import express from 'express'
import { connect } from './config/database.js'

import service from './services/tweet-service.js'

const app = express()

app.listen(3000, async () => {
    console.log('Server started')
    await connect()
    console.log('MongoDB Connected');
    let ser = new service()
    await ser.create({content: 'DOING #FUN'})
})