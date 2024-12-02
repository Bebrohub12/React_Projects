import React from 'react'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'

function Layout({ChildComp}) {
  return (
      
    <div className="layout">

        <div className="sidebarContainer">
            <Sidebar/>
        </div>

        <div className="appContentDisplay">
           <ChildComp/>
        </div>
    </div>
    
  )
}

export default Layout
