import React from 'react'
import MenuItems from './MenuItems'

const Sidebar = () => {
  return (
    <div className='grid col-span-1 shadow-lg shadow-gray-500/50 rtl:shadow-none'> 
      <MenuItems />
    </div>
  )
}

export default Sidebar
