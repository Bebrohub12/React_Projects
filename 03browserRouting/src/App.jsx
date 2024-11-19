import React, { useState } from 'react'
import Button from './button/Button'
// import Nav from './components/navbar/Nav.jsx'
// import Section from './components/section/Section'

function App() {

  // const [name,setName]=useState("submit")
  // const hendleAction = () => {
  //   setName("changeName")
  // }
  // const hendleActionTwo = () => {
  //   // alert("login clicked ")
  //      <Nav />
  // }



  // const data=["apple", "mango","orange"];

  // function hendleLi(){

  // }


  return (
    <div>
      {/* <Button
        name={name}
        onclick={hendleAction}
      />

      <Button
        name="RenderComponent"
        onclick={hendleActionTwo}
      /> */}

      
        <Button name="submit" onclick={hendleLi} />
      


    </div>
  )
}

export default App