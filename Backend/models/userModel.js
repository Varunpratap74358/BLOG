import mongoose from 'mongoose'

const userScahema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    discription:{
      type: String,
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    bookmarks: [{ type: Array, default: [] }],
  },
  { timestamps: true },
)

export const User = mongoose.model('User', userScahema)
