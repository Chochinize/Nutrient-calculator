import React from 'react'
import Sidebar from './SideBar'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
const Layout = () => {
  return (
    <div className=' border-0 border-black '>  
        
       <Outlet/>
    
     </div>
  )
}

export default Layout