const mongoose = require('mongoose')

const connect = async () => {
    await mongoose.connect('mongodb://localhost/Twitter_Dev')
}

module.exports = connect