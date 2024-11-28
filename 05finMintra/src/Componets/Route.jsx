import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogIn from '../Pages/LogIn'
import Registration from '../Pages/Registration'
import Dashboard from '../Pages/Dashboard'

function Nav() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LogIn />} />
                    <Route path="/regester" element={<Registration />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Nav
