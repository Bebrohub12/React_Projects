import React, { useState } from 'react'
import { Button, FormControl, InputLabel, TextField, Select, MenuItem, FormGroup, FormControlLabel, Checkbox, FormLabel, RadioGroup, Radio } from "@mui/material"

function App() {

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    course: "",
    terms: false
  });

  const hendleChange = (e) => {
    console.log(e);
    
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  };

  const hendleSubmit = (e) => {
    // e.preventDefault();
    e.preventDefault()
    console.log(input);

  }

  return (
    <>
      <form onSubmit={hendleSubmit}>
        <TextField variant='filled' onChange={hendleChange} value={input.name} name='name' placeholder='Enter Your Name' /><br />

        <TextField variant='filled' onChange={hendleChange} value={input.email} name='email' placeholder='Enter Your Email' /><br />

        <TextField variant='filled' type='password' onChange={hendleChange} value={input.password} name='password' placeholder='Enter Your Password' /><br />

        <FormControl sx={{ width: "200px" }}>
          <InputLabel id="menu">Course</InputLabel>
          <Select label="course" name='course' onChange={hendleChange}>
            <MenuItem value={"mongoDB"}>monoDb</MenuItem>
            <MenuItem value={"react"}>React</MenuItem>
            <MenuItem value={"html"}>Html</MenuItem>
          </Select>
        </FormControl><br /><br />

        <FormGroup >
          <FormControlLabel label="I Agree T&C" control={<Checkbox onChange={() => {
            setInput((prev) => ({
              ...prev,
              terms: !input.terms
            }))
          }} />} />
        </FormGroup><br />

        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup name='gender' onChange={hendleChange}  >
            <FormControlLabel label="Male" value={"male"} control={<Radio/>}/>
            <FormControlLabel label="Female" value={"female"} control={<Radio/>}/>
            <FormControlLabel label="Others" value={"others"} control={<Radio/>}/>
          </RadioGroup>

        </FormControl><br />


        <Button variant='contained' type='submit'>submit</Button>
      </form>
    </>
  )
}

export default App