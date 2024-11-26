import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogIn from '../Pages/LogIn'
import Registration from '../Pages/Registration'

function Nav() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/regester" element={<Registration />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Nav
