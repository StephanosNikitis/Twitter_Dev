import dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT
export const SECRET_KEY = process.env.SECRET_KEY
export const APPWRITE_ENDPOINT = process.env.APPWRITE_ENDPOINT
export const PROJECT_KEY = process.env.PROJECT_KEY
export const API_KEY = process.env.API_KEY
export const BUCKET_ID = process.env.BUCKET_ID