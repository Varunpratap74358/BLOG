import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoNotificationsSharp, IoSearch } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FiHash, FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_POINT } from '../apis/api';
import { setSuggestedUser, setUser, setUserProfile } from '../redux/authSlice';

const LeftSidebar = () => {
  const {user} = useSelector(store=>store.auth)
const navigate = useNavigate("")
const dispatch =useDispatch()
  const logoutHandler =async ()=>{
    try {
      const {data} = await axios.get(`${USER_API_POINT}/logout`,{withCredentials:true})
      dispatch(setUser(null))
      dispatch(setSuggestedUser([]))
      dispatch(setUserProfile(null))
      navigate('/login')
      alert(data.message)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="w-[20%]">
      <div className='flex'>
      <div className="mt-10">
        <div  className="flex items-center cursor-pointer">
          <img
            src="https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10808.jpg?semt=ais_hybrid"
            className='w-[40px]'
            alt="logo"
          />
          <h1 className='font-bold'>Twiter</h1>
        </div>
        <hr />
        <div className='my-2'>
            <Link to={'/'} className='flex items-center py-2 w-[150px] hover:bg-slate-200 duration-[0.3s] rounded-md cursor-pointer'>
                <div>
                <IoMdHome size={30} />
                </div>
                <h1 className='font-semibold ml-4'>Home</h1>
            </Link>
            <div className='flex items-center py-2 w-[150px] hover:bg-slate-200 duration-[0.3s] rounded-md'>
                <div>
                <FiHash   size={30} />
                </div>
                <h1 className='font-semibold ml-4'>Explorer</h1>
            </div>
            <div className='flex items-center py-2 w-[150px] hover:bg-slate-200 duration-[0.3s] rounded-md'>
                <div>
                <IoNotificationsSharp  size={30} />
                </div>
                <h1 className='font-semibold ml-4'>Notification</h1>
            </div>
            <div className='flex items-center py-2 w-[150px] hover:bg-slate-200 duration-[0.3s] rounded-md'>
                <div>
                <FaBookmark  size={30} />
                </div>
                <h1 className='font-semibold ml-4'>Bookmark</h1>
            </div>
            <div onClick={logoutHandler} className='flex cursor-pointer items-center py-2 w-[150px] hover:bg-slate-200 duration-[0.3s] rounded-md'>
                <div >
                <FiLogOut  size={30} />
                </div>
                <h1 className='font-semibold ml-4'>Logout</h1>
            </div>
            <Link to={`/profile/${user?._id}`} className='flex items-center py-2 px-1 w-[150px] hover:bg-slate-200 duration-[0.3s] rounded-md'>
                <div>
                <FaUser  size={30} />
                </div>
                <h1 className='font-semibold ml-4'>Profile</h1>
            </Link>
            <button className='bg-blue-500 text-white px-10 py-3 rounded-full my-3 hover:bg-blue-700'>Post</button>
        </div>
      </div>
      <div className='bg-slate-600 w-[1px] h-screen ml-2'></div>
    </div>
    </div>
  )
}

export default LeftSidebar
