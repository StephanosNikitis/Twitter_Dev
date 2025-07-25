const Tweet = require('../models/tweet')

class TweetRepository {

    async create(data) {
        try {
            const tweet = await Tweet.create(data)
            return tweet
        } catch (error) {
            console.error(error)
        }
    }

    async get(id) {
        try {
            const tweet = await Tweet.findById(id)
            return tweet
        } catch (error) {
            console.error(error)
        }
    }

    async getWithComments(id) {
        try {
            const tweet = await Tweet.findById(id).populate('comments').lean()
            // const tweet = await Tweet.findById(id).populate({path: 'comments'}).lean()
            return tweet
        } catch (error) {
            console.log(error)
        }
    }

    async update(tweetId, data) {
        try {
            const tweet = await Tweet.findByIdAndUpdate(tweetId, data, {new: true})
            return tweet
        } catch (error) {
            console.error(error)
        }
    }

    async destroy(id) {
        try {
            const tweet = await Tweet.findByIdAndDelete(id)
            return tweet
        } catch (error) {
            console.error(error)
        }
    }

    async getAll(offset, limit) {
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit) //Pagination
            return tweet
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = TweetRepository