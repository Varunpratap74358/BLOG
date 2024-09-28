import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import Feed from './Feed'
import Profile from './Profile'
import { Toaster } from 'react-hot-toast'


const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Home />,
            children:[
                {
                    path:"/",
                    element:<Feed />
                },
                {
                    path:"/profile/:id",
                    element:<Profile />
                }
            ]
        },
        {
            path:"/login",
            element:<Login />
        },
        {
            path:"/signup",
            element:<Signup />
        },
    ])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
