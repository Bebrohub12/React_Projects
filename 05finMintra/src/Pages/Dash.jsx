import React from 'react'
import "../index.css"
import {NavLink, Outlet} from "react-router-dom"

function Dash() {
    return (
        <div className='Home'>

            <div className="sidebaar">
                <ul style={{ listStyle: "none", padding: "10px" }}>
                    <NavLink to="/dashboard" style={{textDecoration:"none"}}><li>Dashboard</li></NavLink>
                    <NavLink to="emicalculator" style={{textDecoration:"none"}}><li>emiCalculetor</li></NavLink>
                    <NavLink to="loan" style={{textDecoration:"none"}}><li>Loan</li></NavLink>
                    <NavLink to="about" style={{textDecoration:"none"}}><li>About</li></NavLink>
                </ul>
            </div>

            <div className="appContentDisplay">                 
               <Outlet/>
            </div>
        </div>
    )
}

export default Dash