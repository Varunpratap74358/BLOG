import React from 'react'
import { Link } from 'react-router-dom'

const RightSidebar = ({suggestedUser}) => {
  
  // console.log(suggestedUser)


  return (
    <div className="w-[20%]  md:w-[200px] px-4 ml-5">
      <div>
        <form className="mt-10">
          <div>
            <input
              type="text"
              className="border min-w-full rounded-lg px-3 py-2 "
              placeholder="search user...."
            />
          </div>
        </form>

        {/* sugested users */}
        <div className=" md:w-[250px] rounded-md px-[5px] bg-gray-200 py-2 min-w-full mt-5">
          <h1 className="font-bold text-xl">Who follow you</h1>
          {/* map */}
          {suggestedUser.length < 0 ? (
            <span className="text-xl text-green-500 font-bold">
              User not heare
            </span>
          ) : (
            suggestedUser.map((v, i) => {
              // console.log(v.followers )

              return (
                <div className="mt-5 " key={i}>
                  <div className=" flex justify-between min-w-full hover:bg-slate-100 rounded-md p-2">
                    <div className="flex ">
                      <img
                        className="rounded-full w-[45px] h-[45px]"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_mAcrV3vVhLq6HK4c1liqGV59qhOwXdEGw&s"
                        alt="photo"
                      />
                      <Link to={`/profile/${v._id}`} className="ml-3">
                        <h3 className="font-bold cursor-pointer">{v?.name}</h3>
                        <p className="text-sm ">@{v?.username}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default RightSidebar
