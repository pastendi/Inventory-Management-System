import React from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/LayoutPage'
import { Navbar, Sidebar } from '../../components'
const Layout = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <Sidebar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

export default Layout
