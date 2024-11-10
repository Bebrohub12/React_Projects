import React, { useCallback, useEffect, useRef, useState } from 'react'
import "./index.css"

function App() {

  const [length, setLength] = useState(8);
  const [charAllow, setCharAllow] = useState(false);
  const [numAllow, setNumAllow] = useState(false);
  const [password, setPassword] = useState("")

  // console.log(charAllow,numAllow);
  const passwordRef = useRef(null)

  const genretedPassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (charAllow) str += "!@#$%^&*"
    if (numAllow) str += "0123456789"

    // console.log(str[52]);  

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      // console.log(char);      
      pass += str[char]
    }

    setPassword(pass)

  }, [length, charAllow, numAllow, setPassword])

  useEffect(() => {
    genretedPassword()
  }, [length, charAllow, numAllow])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, length)
    window.navigator.clipboard.writeText(password)
  }, [password])


  return (
    <div id='mainDiv'>
      <div className="child">

        <input
          type="text"
          id='inp1'
          value={password}
          readOnly ref={passwordRef}
        />
        
        <button id='btn' onClick={copyPassword} >copy</button>

        <div>
          <input
            type="range" min={6} max={100}
            onChange={(e) => setLength(e.target.value)}
          />
          <label >length:{length}</label>

          <input
            type="checkbox"
            value={numAllow}
            onClick={() => setNumAllow((prev) => !prev)}
          />

          <label htmlFor="">Number</label>

          <input
            type="checkbox"
            value={charAllow}
            onClick={() => setCharAllow((prev) => !prev)}
          />
          <label htmlFor="">SpacelChar</label>
        </div>
      </div>

    </div>


  )
}

export default App