import React from 'react'
import { Button } from "@mui/material"
import Logo from "../Images/logoImg/logoImg.png"

function LogIn() {
    return (
        <div id="loginPage">

            <section id='logInSectionOne'>
                <div id='logoContenerPerent'>
                    <div id="logoContener">
                        <img src={Logo} alt="logo" />
                    </div><br /><br />
                    <h3 style={{ fontSize: "30px" }}>Welcome to</h3><br />
                    <h1 style={{
                        fontSize: "78px",
                        background: "linear-gradient(#efe,#74FF63, #393)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}>Finmintra</h1><br />
                    <h1 style={{ fontSize: "27px" }}>(A Microfinance Management Software)</h1><br />
                    <h3>Powered by Vakilkaro</h3>
                </div>

            </section>

            <section id='logInSectionTwo'>
                <div id="loginContener">
                    <ul>
                        <li><h1>Personal Information</h1></li>
                        <li><p>Enter your User Id and your Password.</p></li>
                        <li><input type="text" placeholder='User Name' className='inp' /></li>
                        <li><input type="text" placeholder='Password' className='inp' /></li>
                        <li>
                            <select className='inp'>
                                <option disabled >Select Role</option>
                                <option value="administator">Administator</option>
                                <option value="manager">Manager</option>
                                <option value="customer">Customer</option>
                            </select>
                        </li>
                        <li><Button variant='contained' sx={{ backgroundColor: "black" }}>Submit</Button></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default LogIn