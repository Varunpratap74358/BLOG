import React from 'react'
import CreatePost from './CreatePost'
import Tweet from './Tweet'
import useGetSuggestedUser from '../hooks/useGetSuggestedUser'
import useGetAllTweets from '../hooks/useGetAllTweets'
import { useSelector } from 'react-redux'

const Feed = () => {
  useGetSuggestedUser()
  useGetAllTweets()
  const {allTweets} = useSelector(store=>store.tweet)
  // console.log(allTweets)
  return (
    <div className='w-[60%]'>
      <div className="border p-2 flex flex-col gap-2">
        <CreatePost />
        {
          allTweets && allTweets.map((tweet,i)=><Tweet key={i} tweet={tweet} />)
        }
      </div>
    </div>
  )
}

export default Feed
