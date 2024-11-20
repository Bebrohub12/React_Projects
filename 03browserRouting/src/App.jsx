import React, { useState } from 'react'
import List from './components/list/List';
import Button from "./button/Button.jsx"

function App() {

  const data = ["apple", "mango", "orange", "papaya"];
  const [name, setName] = useState("submit")

  const hendleChange = () => {
    setName("login")
  }

  return (
    <>
      <div>
        {
          data.map((item, ind) => {
            return <List item={item} key={ind} />
          })
        }
      </div><br />

      <Button name={name} onclick={hendleChange} />


    </>
  )
}

export default App