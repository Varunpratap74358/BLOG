import React from 'react'
import { FaCommentDots } from 'react-icons/fa6'
import { FaRegHeart } from 'react-icons/fa'
import { FaRegBookmark } from 'react-icons/fa6'

const Tweet = ({ tweet }) => {
  // console.log(tweet)
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
            <div className="flex gap-1 items-center">
              <h1 className="font-bold">{tweet?.userDetails[0]?.name}</h1>
              <p className="text-gray-500 text-sm">@varun112 1m</p>
            </div>
            <div>
              <p>{tweet?.description}</p>
            </div>
            <div className="flex px-3 justify-between w-f mt-4">
              <div className="flex items-center cursor-pointer gap-3 hover:text-green-500 text-lg">
                <FaCommentDots size={24} />
                <p>0</p>
              </div>
              <div className="flex items-center cursor-pointer gap-3 hover:text-red-400 text-lg">
                <FaRegHeart size={24} />
                <p>{tweet?.like.length}</p>
              </div>
              <div className="flex items-center cursor-pointer gap-3 hover:text-blue-500 text-lg">
                <FaRegBookmark size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweet
