import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import { Link, useParams } from 'react-router-dom'
import useGetProfile from '../hooks/useGetProfile'
import { useDispatch, useSelector } from 'react-redux'

const Profile = () => {
  const params = useParams()
  // console.log(params.id)
  useGetProfile(params.id)

  const { userProfile } = useSelector((store) => store.auth)
  console.log(userProfile)
  return (
    <div className="w-[50%] border p-1 my-4">
      <div className="">
        <div className="flex items-center">
          <Link
            to={'/'}
            className="p-2 rounded-full cursor-pointer hover:bg-gray-700 hover:text-white duration-[0.3s] text-gray-600 bg-gray-200"
          >
            <IoArrowBackOutline size={20} />
          </Link>
          <div className="ml-3 p-3">
            <h1 className="font-bold text-xl">{userProfile?.username}</h1>
            <p className="text-sm text-gray-600">10 posts</p>
          </div>
        </div>
        {/* cover */}
        <img
          src="https://cdn.prod.website-files.com/5e9aa66fd3886aa2b4ec01ca/656542eae3674ef944805d5d_make%20money%20hacking.webp"
          alt=""
          className="min-h-32 max-h-52 w-[100%] lg:min-h-52 lg:max-h-52 rounded-md hover:scale-[1.01]"
        />
        <div className="absolute top-56 mt-4 ml-2 border-[5px] border-white rounded-full">
          {/* profile photo */}
          <img
            src="https://i.pinimg.com/originals/90/f7/a4/90f7a49893bc987858e13e10ffc72a23.jpg"
            alt=""
            className="w-28 h-28 hover:scale-[1.03] rounded-full"
          />
        </div>
        <div className="text-right m-4">
          <button className="px-4 py-1 bg-gray-100 hover:bg-gray-200 font-semibold hover:scale-[1.03] rounded-full  border border-gray-500">
            Edit prifile
          </button>
        </div>
        <div className="ml-4 my-3">
          <h1 className="font-bold text-xl">{userProfile?.name}</h1>
          <p>@{userProfile?.username}</p>
        </div>
        <div className="ml-4">
          {/* bio */}
          <p className="">
            {' '}
            😎💖💋 Lorem ipsum dolor 💖💋 sit amet consectur adipicing 💖 elit.
            Quasi, alias? 🌹👏🌹👏
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile
