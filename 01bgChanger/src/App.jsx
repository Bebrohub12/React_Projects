import React, { useState } from 'react'

function App() {

  const [color,setColor]=useState("pink")

  return (
    <div style={{backgroundColor: color}} className='h-screen	w-full flex justify-center items-center'>

      <div className='w-fit h-auto bg-white p-3 rounded-lg'>
        <button onClick={()=>{setColor("red")}} className='rounded-full bg-red-600 text-white p-3 text-xl m-1'>Red</button>
        <button onClick={()=>{setColor("blue")}} className='rounded-full bg-blue-600 text-white p-3 text-xl m-1'>blue</button>
        <button onClick={()=>{setColor("green")}} className='rounded-full bg-green-600 text-white p-3 text-xl m-1'>green</button>
        <button onClick={()=>{setColor("orange")}} className='rounded-full bg-orange-600 text-white p-3 text-xl m-1'>orange</button>
       
      </div>
    </div>
  )
}

export default App