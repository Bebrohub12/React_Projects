import React from 'react'
import Input from "../../input/Input.jsx"

function List({ item }) {
  return (
    <div>
      <li>{item}</li>
      {/* <Input type={item} /> */}
    </div>
  )
}

export default List