import axios from 'axios'
import React, { useEffect } from 'react'
import { USER_API_POINT } from '../apis/api'
import { useDispatch } from 'react-redux'
import { setSuggestedUser } from '../redux/authSlice'

const useGetSuggestedUser = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } =await axios.get(`${USER_API_POINT}/suggested`, {
          withCredentials: true,
        })
        // console.log(data)
        dispatch(setSuggestedUser(data.users))
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser()
  }, [])
}

export default useGetSuggestedUser
