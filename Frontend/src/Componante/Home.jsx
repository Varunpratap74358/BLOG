import React from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import { Outlet } from 'react-router-dom'
import useGetSuggestedUser from '../hooks/useGetSuggestedUser'
import { useSelector } from 'react-redux'

const Home = () => {
  // useGetSuggestedUser()
  const { suggestedUser, user } = useSelector((store) => store.auth)
  return (
    <div className='flex justify-between w-[80%] mx-auto py-2'>
      <LeftSidebar />
      <Outlet />
      <RightSidebar suggestedUser={suggestedUser} />
    </div>
  )
}

export default Home
