import TweetRepository from "../../src/repository/tweet-repository.js";
import Tweet from "../../src/models/tweet.js";

jest.mock('../../src/models/tweet.js')

describe('Create tweet tests', () => {
    test('should create a new tweet and return it', async () => {
        const data = {
            content: "Testing tweet"
        }
        const spy = jest.spyOn(Tweet, 'create').mockImplementation(() => {
            return {...data, createdAt: '2025-08-14', updatedAt: '2025-08-14'}
        })
        const tweetRepository = new TweetRepository()
        const tweet = await tweetRepository.create(data)
        expect(spy).toHaveBeenCalled()
        expect(tweet.content).toBe(data.content)
        expect(tweet.createdAt).toBeDefined()
    })

    test('should not create a tweet and throw error', async () => {
        const data = {
            content: "Testing tweet"
        }
        const spy = jest.spyOn(Tweet, 'create').mockImplementation(() => {
            throw new Error('Something went wrong')
        })
        const tweetRepository = new TweetRepository()
        await expect(tweetRepository.create(data)).rejects.toThrow('Something went wrong');
        expect(spy).toHaveBeenCalled();
    })
})

describe('Get all tweet tests', () => {
    test('testing limit for get all', async () => {
        const data = {
            content: "Testing tweet"
        }
        const tweetsArray = [{...data, createdAt: '2025-08-14', updatedAt: '2025-08-14'}, {...data, createdAt: '2025-08-14', updatedAt: '2025-08-14'}, {...data, createdAt: '2025-08-14', updatedAt: '2025-08-14'}]
        const spy = jest.spyOn(Tweet, 'find');
        const mockQuery = {
            skip: jest.fn().mockReturnThis(),
            limit: jest.fn().mockImplementation((limit) => Promise.resolve(tweetsArray.slice(0, limit)))
        };
        spy.mockReturnValue(mockQuery);
        const tweetRepository = new TweetRepository();
        const tweets = await tweetRepository.getAll(0, 2);
        expect(spy).toHaveBeenCalled();
        expect(mockQuery.skip).toHaveBeenCalledWith(0);
        expect(mockQuery.limit).toHaveBeenCalledWith(2);
        expect(tweets).toHaveLength(2);
    });
});