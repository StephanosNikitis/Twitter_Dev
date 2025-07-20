const express = require('express')
const connect = require('./config/database')

const app = express()

const TweetRepository = require('./repository/tweet-repository')
const Comment = require('./models/comments')

app.listen(3000, async () => {
    console.log('Server started')
    await connect()
    console.log('MongoDB Connected');
    // const tweet = await Tweet.create({
    //     content: 'Third Tweet',
    // })
    // const tweet = await Tweet.find({userEmail: 'a@b.com'})

    const tweetRepo = new TweetRepository()
    const tweet = await tweetRepo.getWithComments('687d3e287eb05ce22232006d')
    console.log(tweet)
})