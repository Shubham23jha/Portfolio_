import React from 'react'
import Navbar from './Components/navbar'
import Logo from './Components/logo'
import Copyright from './Components/copyright'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
      <Navbar/>
      <Logo/>
      <Outlet/>
      <Copyright/>
    </>
  )
}

export default Layout
