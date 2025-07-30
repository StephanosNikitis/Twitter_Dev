import express from 'express'
import bodyParser from 'body-parser'
import { connect } from './config/database.js'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

import apiRoutes from './routes/index.js'

import { UserRepository, TweetRepository } from './repository/index.js'
import LikeService from './services/like-service.js'

app.use('/api', apiRoutes)

app.listen(3000, async () => {
    console.log('Server started')
    await connect()
    console.log('MongoDB Connected');

    // const userRepo = new UserRepository()
    // const tweetRepo = new TweetRepository()
    // const tweets = await tweetRepo.getAll(0, 10)
    // const users = await userRepo.getAll()

    // const user = await userRepo.create({
    //     email: 'shaurya@admin.com',
    //     password: '1234',
    //     name: 'Shaurya'
    // })

    // const likeService = new LikeService()
    // await likeService.toggleLike(tweets[0].id, 'Tweet', users[0].id)
})