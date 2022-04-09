import React from 'react'
import Sidebar from './SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div> 

       <Outlet/>
    
     </div>
  )
}

export default Layout