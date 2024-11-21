import React from 'react'
import { Button, Checkbox, IconButton, FormControlLabel,FormControl,Radio,RadioGroup, FormLabel } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import Fingerprint from "@mui/icons-material/Fingerprint"


function App() {
  return (
    <div>
      <Button variant='text'>text</Button>
      <Button variant='outlined'>outlined</Button>
      <Button
        // disabled
        // color='success'       
        // onClick={() => {
        //   alert("button clicked")
        // }} 
        variant='contained'
        startIcon={<DeleteIcon />}
        sx={{ margin: "10px" }}

      >contained</Button>

      <IconButton onClick={() => { alert("button clicked") }}>
        <DeleteIcon color='success' />
      </IconButton>
      <IconButton onClick={() => { alert("FingerPrint Clicked") }}>
        <Fingerprint />
      </IconButton>

      <Checkbox defaultChecked />
      <FormControlLabel control={<Checkbox />} label="terms & condition" required />
      <FormControlLabel label="check all" control={< Checkbox />} />

      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>


    </div>
  )
}

export default App