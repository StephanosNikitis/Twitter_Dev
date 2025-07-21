const express = require('express')
const connect = require('./config/database')

const app = express()

const TweetRepository = require('./repository/tweet-repository')
const Comment = require('./models/comments')

app.listen(3000, async () => {
    console.log('Server started')
    await connect()
    console.log('MongoDB Connected');

    const tweetRepo = new TweetRepository()
    const tweet = await tweetRepo.getAll(0, 4)
    if (tweet[0] && tweet[0].contentWithEmail !== undefined) {
        console.log(tweet[0].contentWithEmail)
    } else {
        console.log('contentWithEmail property not found on tweet[0]')
    }
})