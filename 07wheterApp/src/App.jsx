import React, { useEffect, useState } from 'react'
import "./App.css"
import SearchIcon from '@mui/icons-material/Search';
import img from "./image/image2.png"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AirIcon from '@mui/icons-material/Air';
// import axios from 'axios';


function App() {

  const [value, setValue] = useState("");
  const [data, setData] = useState(null);
  const API_KEY = '43b4d29073363fb9a9fe175f35f3654b';
  const days = "4";

  async function getData() {

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}&units=metric`)
      .then((responce) => {
        return responce.json();
      })
      .then((result) => {
        return setData(result)
      })
      .catch((error) => {
        return console.log(error)
      })

    getForcast();
  }

  async function getForcast() {
    const res2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${API_KEY}&units=metric`)
      .then((responce) => { return responce.json() })
      .then((rslt) => { return rslt })
      .catch((err) => console.log(err))

    console.log(res2);

  }






  return (

    <div className='body'>
      <div className="wheterSection">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Enter Your City..... '

        />
        <span > <SearchIcon onClick={getData} /></span>

        <div className="img">
          <img src={img} />
        </div>

        <div className="content">
          <h1>{data?.main?.temp ? `${data.main.temp}°C` : "n/a"}</h1>

          <div className="cont2">
            <div className="humidity">
              <ThunderstormIcon style={{ fontSize: "70px" }} />
              <h2> Humidity</h2>
              <h3>{data?.main?.humidity}°C </h3>
            </div>

            <div className="humidity">
              <AirIcon style={{ fontSize: "70px" }} />
              <h2> Wind Speed</h2>
              <h3>  {data?.wind?.speed}km/h </h3>
            </div>
          </div>


          {/* <p>  {data?.name} </p> */}

        </div>

      </div>

      <div className="wheterForcast">
        <div className='box'>
          <h2>Monday</h2>
          <h3>21°C</h3>
          <h4>Clouds</h4>
        </div>
        <div className='box'>
          <h2>Monday</h2>
          <h3>21°C</h3>
          <h4>Clouds</h4>
        </div>
        <div className='box'>
          <h2>Monday</h2>
          <h3>21°C</h3>
          <h4>Clouds</h4>
        </div>
        <div className='box'>
          <h2>Monday</h2>
          <h3>21°C</h3>
          <h4>Clouds</h4>
        </div>
      </div>

    </div>


  )
}

export default App




















// API KEY="43b4d29073363fb9a9fe175f35f3654b"
// API URL="https://api.openweathermap.org/data/2.5/weather?q=jaipur&appid=43b4d29073363fb9a9fe175f35f3654b&units=metric"