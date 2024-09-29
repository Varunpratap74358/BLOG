import React from 'react'
import { FaCommentDots } from 'react-icons/fa6'
import { FaRegHeart } from 'react-icons/fa'
import { FaRegBookmark } from 'react-icons/fa6'
import { MdDelete } from 'react-icons/md'
import toast from 'react-hot-toast'
import axios from 'axios'
import { TWEET_API_POINT } from '../apis/api'
import { useSelector } from 'react-redux'

const Tweet = ({ tweet }) => {
  // console.log(tweet)
  const {user} = useSelector(store=>store.auth)
console.log(user)

  const deleteTweet = async (id) => {
    try {
      const { data } = await axios.delete(`${TWEET_API_POINT}/delete/${id}`, {
        withCredentials: true,
      })
      toast.success(data.message)
      window.location.reload()
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }

  const bookmarkHandler = async (id) => {
    try {
      const { data } = await axios.get(`${TWEET_API_POINT}/bookmark/${id}`, {
        withCredentials: true,
      })
      toast.success(data.message)
      // window.location.reload()
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }

  return (
    <div>
      <div className="border p-2">
        <div className="flex  gap-3">
          <img
            className="rounded-full w-[45px] h-[45px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_mAcrV3vVhLq6HK4c1liqGV59qhOwXdEGw&s"
            alt="photo"
          />
          <div className="ml-2">
            <div className="flex  flex-col ">
              <h1 className="font-bold">{tweet?.userDetails[0]?.name}</h1>
              <p className="text-gray-500 text-sm">@varun112 1m</p>
            </div>
            <div className="mt-2 border-t-2">
              <p className="font-semibold">{tweet?.description}</p>
            </div>
          </div>
        </div>
        <div className="flex px-3 justify-between  min-w-[100%] mt-4">
          <div
            onClick={() => deleteTweet(tweet?._id)}
            className="flex items-center cursor-pointer gap-3 hover:text-red-500 text-lg"
          >
            <MdDelete size={24} />
          </div>
          <div className="flex items-center cursor-pointer gap-3 hover:text-green-500 text-lg">
            <FaCommentDots size={24} />
            <p>0</p>
          </div>
          <div className="flex items-center cursor-pointer gap-3 hover:text-red-400 text-lg">
            <FaRegHeart size={24} />
            <p>{tweet?.like.length}</p>
          </div>
          <div onClick={()=>bookmarkHandler(tweet?._id)} className="flex items-center cursor-pointer gap-3 hover:text-blue-500 text-lg">
            <FaRegBookmark size={24} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweet
