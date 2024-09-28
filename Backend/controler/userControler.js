import { User } from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signUp = async (req, res) => {
  try {
    const { name, username, email, password,discription } = req.body
    if (!name || !username || !email || !password) {
      return res.status(400).json({
        success: true,
        message: 'All fildes are required',
      })
    }
    const user = await User.findOne({ email })
    const isUsername = await User.findOne({ username })
    if (user || isUsername) {
      return res.status(401).json({
        message: 'User already exist',
        success: false,
      })
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const data = await User.create({
      name,
      email,
      username,
      password: hashPassword,
      discription
    })
    res.status(201).json({
      success: true,
      message: 'Account created successfully',
      data,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: 'Fill all form',
      })
    }
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not exist',
      })
    }
    const comparePassword = await bcrypt.compare(password, user.password)
    if (!comparePassword) {
      return res.status(404).json({
        success: false,
        message: 'Password is wrong',
      })
    }

    const token = await jwt.sign({ userId: user._id }, process.env.JWTSECRET, {
      expiresIn: '1d',
    })

    res
      .status(200)
      .cookie('token', token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      })
      .json({
        success: true,
        message: `welcome ${user.name}`,
        user
      })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

export const logout = async (req, res) => {
  try {
    res.status(200).cookie('token', '', { maxAge: 0 }).json({
      message: 'User logout successfully',
      success: true,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

export const suggestedUser = async (req, res) => {
  try {
    const userId = req.id
    const users = await User.find({ _id: { $ne: userId } })
    if (users.length <= 0) {
      return res.status(404).json({
        success: false,
        message: 'Users hai he nhi',
      })
    }
    res.status(200).json({
      success: true,
      users,
    })
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error.message,
    })
  }
}

export const followAndUnfollow = async (req, res) => {
  try {
    const userId = req.id
    const outherUser = req.params.id
    const user = await User.findById(userId)
    if (!user || !outherUser) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      })
    }
    if (user.followers.includes(outherUser)) {
      // unfollow method
      await User.findByIdAndUpdate(userId, { $pull: { followers: outherUser } })
      await User.findByIdAndUpdate(outherUser, { $pull: { following: userId } })
      return res.status(200).json({
        success: true,
        message: 'User unfollow successfully',
      })
    } else {
      // follow method
      await User.findByIdAndUpdate(userId, { $push: { following: outherUser } })
      await User.findByIdAndUpdate(outherUser, { $push: { followers: userId } })
      return res.status(200).json({
        success: true,
        message: 'User follow successfully',
      })
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

export const updateUser = async (req, res) => {
  try {
    const userId = req.id
    const user = await User.findByIdAndUpdate(userId, req.body, { new: true })
    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      user,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}


export const userProfile = async(req,res)=>{
  try {
    const userId = req.params.id
    const user = await User.findById(userId)
    res.status(200).json({
      success: true,
      user,
    })
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error.message,
    })
  }
}