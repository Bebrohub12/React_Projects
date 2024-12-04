import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Dashboard from '../../components/dashboard/Dashboard'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function Layout({ ChildComp }) {
  return (

    <div className="layout">

      <div className="sidebarContainer">
        <Sidebar />
      </div>
      <div className="appContentDisplay">
        <Header/>
        <ChildComp />
        <Footer/>
      </div>

    </div>

  )
}

export default Layout
