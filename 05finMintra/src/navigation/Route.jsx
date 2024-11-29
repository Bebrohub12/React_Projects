import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogIn from '../Pages/LogIn'
import Registration from '../Pages/Registration'
import Dash from '../Pages/Dash'
import EmiCalculator from '../emiCalculator/Emicalculator'

function Nav() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LogIn />} />
                    <Route path="/regester" element={<Registration />} />
                    <Route path="/dashboard" element={<Dash />} >
                        <Route path='about' element={<LogIn />} />
                        <Route path='loan' element={<Registration />} />
                        <Route path='emicalculator' element={<EmiCalculator />} />
                    </Route>

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Nav
