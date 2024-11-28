import React, { useState } from 'react'
import { Button } from "@mui/material"


function Registration() {

    const [userData,setUserData]=useState({
              name:"",
              email:"",
              password:""
    })

    function hendleFormData(e){
        setUserData((prev)=>(
            {
                ...prev,
                [e.target.name] : e.target.value
            }
        ))
    }

    function hendleSubmit(){

        let userDetails = localStorage.getItem("UserInfo");
        let setData = userDetails ? JSON.parse(userDetails) : [];
        setData.push(userData);
        let ans = JSON.stringify(setData);
        console.log(setData);
        window.localStorage.setItem("UserInfo", ans);
        
    }

  

  return (
    <div>
        <section id='logInSectionTwo'>
                <div id="loginContener"> 
                    <ul>
                        <li><h1>Create Your Account</h1></li>
                        <li><p>Enter your User Id and your Password.</p></li>
                        <li><input onChange={hendleFormData} name="name"  value={userData.name} type="text" placeholder='User Name' className='inp' /></li>
                        <li><input onChange={hendleFormData} name="email" value={userData.email}  type="text" placeholder='User Email' className='inp' /></li>
                        <li><input onChange={hendleFormData} name="password" value={userData.password}  type="text" placeholder='Password' className='inp' /></li>
                        <li>
                            <select className='inp'>
                                <option disabled selected >Select Role</option>
                                <option value="administator">Administator</option>
                                <option value="manager">Manager</option>
                                <option value="customer">Customer</option>
                            </select>
                        </li>
                        <li><Button variant='contained' onClick={hendleSubmit} sx={{ backgroundColor: "black" }}>Create Account</Button></li>
                    </ul>
                </div>
            </section>
    </div>
  )
}

export default Registration