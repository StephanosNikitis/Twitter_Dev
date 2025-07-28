import mongoose from "mongoose"

export const connect = async () => {
    await mongoose.connect('mongodb://localhost/Twitter_Dev')
}