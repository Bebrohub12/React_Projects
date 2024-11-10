import React, { useState } from 'react'
import "./index.css"

function App() {

  const [length, setLength] = useState(8);
  const [charAllow, setCharAllow] = useState(false);
  const [numAllow,setNumAllow]=useState(false);
  const [password,setPassword]=useState("")

  // console.log(charAllow,numAllow);
  


  return (
    <div id='mainDiv'>
      <div className="child">

        <input type="text" id='inp1' value={password} readOnly />
        <button id='btn'>copy</button>

        <div>
          <input type="range" min={6} max={100} onChange={(e) => setLength(e.target.value)} />
          <label >length:{length}</label>

          <input type="checkbox" value={numAllow} onClick={()=>setNumAllow((prev)=> !prev)} />
          <label htmlFor="">Number</label>

          <input type="checkbox" value={charAllow} onClick={() => setCharAllow((prev)=>!prev)} />
          <label htmlFor="">SpacelChar</label>
        </div>
      </div>

    </div>


  )
}

export default App