import axios from 'axios'
import React, { useState } from 'react'
import { FaImage } from 'react-icons/fa6'
import { TWEET_API_POINT } from '../apis/api'
import useGetAllTweets from '../hooks/useGetAllTweets'

const CreatePost = () => {
  const [text, setText] = useState('')

  const postHandler = async () => {
    // console.log(text)
    try {
      const { data } = await axios.post(
        `${TWEET_API_POINT}/create`,
        { description: text },
        {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        },
      )
      setText('')
      alert(data.message);
      window.location.reload()
    } catch (error) {
      console.log("Error")
    }
  }

  return (
    <div className="min-w-[100%] border  my-2">
      <div className="">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer hover:bg-slate-400 w-full py-3 text-center rounded-full">
            <h1 className="font-bold text-gray-600 text-lg">For You</h1>
          </div>
          <div className="cursor-pointer hover:bg-slate-400 w-full py-3 text-center rounded-full">
            <h1 className="font-bold text-gray-600 text-lg ">Following</h1>
          </div>
        </div>
        <hr />
        <div className="mt-4 flex flex-col gap-3">
          <div className="flex items-center px-3">
            <div className="">
              <img
                className="rounded-full w-[45px] h-[45px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_mAcrV3vVhLq6HK4c1liqGV59qhOwXdEGw&s"
                alt="photo"
              />
            </div>
            <textarea
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={1}
              placeholder="What is happening?!"
              className=" py-2 px-3 w-full mx-2 text-lg outline-none"
            />
          </div>
          <hr />
          <div className="flex p-3 items-center justify-between">
            <FaImage className="mx-4 cursor-pointer" size={30} />
            <button
              onClick={postHandler}
              className="bg-blue-600 hover:bg-blue-400 text-white rounded-full  py-2 px-4 border-none"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
