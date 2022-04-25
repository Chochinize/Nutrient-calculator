import React from 'react'
import Sidebar from './SideBar'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
const Layout = () => {
  return (
    <div className=''>  
        
       <Outlet/>
    
     </div>
  )
}

export default Layout