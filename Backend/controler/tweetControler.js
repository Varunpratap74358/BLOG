import { Tweet } from '../models/tweetSchema.js'
import { User } from '../models/userModel.js'

// create tweet
export const createTweet = async (req, res) => {
  try {
    const { description } = req.body
    const userId = req.id
    if (!description) {
      return res.status(400).json({
        success: false,
        message: 'Text is required',
      })
    }
    const user = await User.findById(userId).select('-password')
    await Tweet.create({
      description,
      userId,
      userDetails: user,
    })
    res.status(201).json({
      success: true,
      message: 'Post created successfully',
    })
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error.message,
    })
  }
}

// delete tweet
export const deleteTweet = async (req, res) => {
  try {
    const tweetId = req.params.id
    if (req.id !== tweetId) {
      return res.status(400).json({
        success: true,
        message: 'Only owner can delete own post',
      })
    }
    const tweet = await Tweet.findByIdAndDelete(tweetId)

    if (!tweet) {
      return res.status(400).json({
        success: true,
        message: 'Tweet is not found',
      })
    }
    res.status(200).json({
      success: true,
      message: 'Post deleted successfully',
    })
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error.message,
    })
  }
}

// get all tweets
export const getAlltweet = async (req, res) => {
  try {
    const tweets = await Tweet.find()
    res.status(200).json({
      success: true,
      tweets,
    })
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error.message,
    })
  }
}

// get outher user tweets
export const getOutherUserTweets = async (req, res) => {
  try {
    const userId = req.params.userid
    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({
        success: true,
        message: 'User not found',
      })
    }
    const tweets = await Tweet.find({ userId })
    res.status(200).json({
      success: true,
      tweets,
    })
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error.message,
    })
  }
}

// like and dislike tweet
export const likeOrDislike = async (req, res) => {
  try {
    const tweetId = req.params.id
    const userId = req.id
    const tweet = await Tweet.findById(tweetId)
    if (!tweet) {
      return res.status(404).json({
        success: true,
        message: 'Tweet not found',
      })
    }
    if (tweet?.like?.includes(userId)) {
      await Tweet.findByIdAndUpdate(tweetId, { $pull: { like: userId } })
      return res.status(200).json({
        success: true,
        message: 'Tweet dislike',
      })
    } else {
      await Tweet.findByIdAndUpdate(tweetId, { $push: { like: userId } })
      return res.status(200).json({
        success: true,
        message: 'Tweet liked',
      })
    }
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error.message,
    })
  }
}

// bookmar tweet
export const bookmarkTweet = async (req, res) => {
  try {
    const loggedInUserId = req.id
    const tweetId = req.params.id
    const user = await User.findById(loggedInUserId)
    if (user.bookmarks.includes(tweetId)) {
      // remove
      await User.findByIdAndUpdate(loggedInUserId, {
        $pull: { bookmarks: tweetId },
      })
      return res.status(200).json({
        message: 'Removed from bookmarks.',
      })
    } else {
      // bookmark
      await User.findByIdAndUpdate(loggedInUserId, {
        $push: { bookmarks: tweetId },
      })
      return res.status(200).json({
        message: 'Saved to bookmarks.',
      })
    }
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error.message,
    })
  }
}
