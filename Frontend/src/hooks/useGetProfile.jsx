import axios from 'axios'
import React, { useEffect } from 'react'
import { USER_API_POINT } from '../apis/api'
import { useDispatch, useSelector } from 'react-redux'
import { setUserProfile } from '../redux/authSlice'

const useGetProfile = (id) => {
    // console.log(id)
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } =await axios.get(`${USER_API_POINT}/profile/${id}`, {
          withCredentials: true,
        })
        // console.log(data)
        dispatch(setUserProfile(data.user))
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser()
  }, [id])
}

export default useGetProfile
