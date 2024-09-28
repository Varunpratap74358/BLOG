import axios from 'axios'
import React, { useEffect } from 'react'
import { TWEET_API_POINT } from '../apis/api'
import { useDispatch } from 'react-redux'
import { setAllTweets } from '../redux/tweetSlice'
import Feed from '../Componante/Feed'

const useGetAllTweets = () => {
    const dispatch = useDispatch()
  useEffect(()=>{
    const fethTweet = async()=>{
        try {
            const {data} = await axios.get(`${TWEET_API_POINT}/alltweets`,{withCredentials:true})
            // console.log(data)
            dispatch(setAllTweets(data.tweets))
        } catch (error) {
            console.log(error)
        }
    }
    fethTweet()

  },[Feed])
}

export default useGetAllTweets
