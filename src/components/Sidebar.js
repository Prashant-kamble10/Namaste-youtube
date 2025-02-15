import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.sidebarOpen)
  

  return (
  <>
       {
         isMenuOpen ?  <div className="px-4 py-6 w-48 shadow-lg">
         <ul className="m-2 p-2 hover:cursor-pointer">
            <li>Home</li>
            <li>Shorts</li>
            <li>Subscriptions</li>
         </ul>
         <div className="border-t-2">
         </div>
         <ul className="m-2 p-2 hover:cursor-pointer">
            <li>History</li>
            <li>Playlists</li>
            <li>Your Videos</li>
            <li>watch later</li>
            <li>Liked Videos</li>
         </ul>
         <div className="border-t-2">
         </div>
         <ul className="m-2 p-2 hover:cursor-pointer">
            <li>History</li>
            <li>Playlists</li>
            <li>Your Videos</li>
            <li>watch later</li>
            <li>Liked Videos</li>
         </ul>
         <div className="border-t-2">
         </div>
          <ul className="m-2 p-2 hover:cursor-pointer">
            <li>Subscriptions</li>
         </ul>
         <div className="border-t-2">
         </div>
        </div> : null
       }
       </>
    
  )
}

export default Sidebar
