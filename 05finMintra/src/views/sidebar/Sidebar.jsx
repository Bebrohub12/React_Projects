import React from 'react'
import "../../index.css"
import { NavLink } from "react-router-dom"

function Sidebar() {
    return (

        <div className="sidebaar">
            <ul style={{ listStyle: "none", padding: "10px" }}>
                <NavLink to="/dashboard" style={{ textDecoration: "none" }}><li>Dashboard</li></NavLink>
                <NavLink to="/emicalculator" style={{ textDecoration: "none" }}><li>emiCalculetor</li></NavLink>
                <NavLink to="/about" style={{ textDecoration: "none" }}><li>About</li></NavLink>
            </ul>
        </div>

    )
}

export default Sidebar