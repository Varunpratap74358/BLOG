import axios from 'axios'
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { USER_API_POINT } from '../apis/api'
import { useSelector } from 'react-redux'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const {user} = useSelector(store=>store.auth)
  // console.log(user)
  if(user){
    return <Navigate to={'/'} />
  }

  const signupHandler = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(
        `${USER_API_POINT}/register`,
        { email, name, username, password },
        {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        },
      )
      console.log(data)
      toast.success(data?.message)
      navigate('/login')
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }
  return (
    <div className="w-screen bg-slate-300 h-screen flex items-center justify-center">
      <div className="flex items-center">
        <div className="">
          {/* form */}
          <form
            onSubmit={signupHandler}
            className="flex hover:scale-[1.03] duration-[0.3s] border-[3px] rounded-lg shadow-md bg-gray-100 border-gray-400 flex-col gap-3 p-7 lg:w-[500px] md:w-[350px] "
          >
            <div className="mx-auto rounded-full">
              <img
                src="https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10808.jpg?semt=ais_hybrid"
                width={'60px'}
                className="border rounded-full hover:scale-[1.02]"
                alt=""
              />
            </div>
            <h1 className="text-center font-bold mb-3 text-xl ">SignUp</h1>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-2 py-3 rounded-lg "
              type="text"
              placeholder="name"
            />
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border px-2 py-3 rounded-lg "
              type="text"
              placeholder="username"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-2 py-3 rounded-lg "
              type="text"
              placeholder="email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-2 py-3 rounded-lg "
              type="text"
              placeholder="password"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-400"
            >
              Signup
            </button>
            <p className="text-xs">
              You have alrady{' '}
              <Link to={'/login'} className="text-blue-400 underline">
                Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
