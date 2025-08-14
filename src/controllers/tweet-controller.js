import TweetService from "../services/tweet-service.js";
import multer from "multer";
import { Client, Storage, ID, Permission, Role } from 'node-appwrite'
import { InputFile } from 'node-appwrite/file'

import { APPWRITE_ENDPOINT, PROJECT_KEY, API_KEY, BUCKET_ID } from "../config/serverConfig.js";

const upload = multer({ storage: multer.memoryStorage() })

const client = new Client().setEndpoint(APPWRITE_ENDPOINT).setProject(PROJECT_KEY).setKey(API_KEY)

const storage = new Storage(client)

const tweetService = new TweetService()

export const createTweet = async (req, res) => {
    try {
        if(req.file) {
            const uploadedImage = await storage.createFile(
                BUCKET_ID,
                ID.unique(),
                InputFile.fromBuffer(req.file.buffer, req.file.originalname),
                [Permission.read(Role.any())]
            )

            const imageUrl = `${APPWRITE_ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${uploadedImage.$id}/view?project=${PROJECT_KEY}`

            req.body.image = imageUrl
        }
        const response = await tweetService.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new tweet',
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'something went wrong',
            data: {},
            err: error
        })
    }
}

export const getTweet = async (req, res) => {
    try {
        const response = await tweetService.get(req.params.id)
        return res.status(200).json({
            success: true,
            message: 'Successfully fetched a tweet',
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'something went wrong',
            data: {},
            err: error
        })
    }
}

export const uploadMiddleware = upload.single('tweetImage')