import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogIn from '../Pages/LogIn'
import Registration from '../Pages/Registration'
import Layout from '../views/layout/Layout'
import EmiCalculator from "../emiCalculator/EmiCalculator"
import Dashboard from '../components/dashboard/Dashboard'
import NotFound from '../Pages/NotFound'
import Emicalculator from '../emiCalculator/EmiCalculator'

function Nav() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LogIn />} />
                    <Route path="/regester" element={<Registration />} />
                    <Route path='/dashboard' element={<Layout ChildComp={Dashboard}/>} />
                    <Route path='/emicalculator' element={<Layout ChildComp={Emicalculator}/>} />
                    <Route path='*' element={<Layout ChildComp={NotFound}/>} />
                   
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Nav
