import React from 'react'
import { Button } from "@mui/material"


function Registration() {
  return (
    <div>
        <section id='logInSectionTwo'>
                <div id="loginContener"> 
                    <ul>
                        <li><h1>Create Your Account</h1></li>
                        <li><p>Enter your User Id and your Password.</p></li>
                        <li><input type="text" placeholder='User Name' className='inp' /></li>
                        <li><input type="text" placeholder='User Email' className='inp' /></li>
                        <li><input type="text" placeholder='Password' className='inp' /></li>
                        <li>
                            <select className='inp'>
                                <option disabled selected >Select Role</option>
                                <option value="administator">Administator</option>
                                <option value="manager">Manager</option>
                                <option value="customer">Customer</option>
                            </select>
                        </li>
                        <li><Button variant='contained' sx={{ backgroundColor: "black" }}>Create Account</Button></li>
                    </ul>
                </div>
            </section>
    </div>
  )
}

export default Registration