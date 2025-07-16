import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import axios from "axios"

function App() {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/v1/api")
      .then((result) => console.log(result))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <h1>Fullstack Learning Prectice</h1>
      <p>{userData.length}</p>
    </>
  )
}

export default App
