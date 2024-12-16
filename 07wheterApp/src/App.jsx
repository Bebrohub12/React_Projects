import React, { useEffect, useState } from 'react'
import "./App.css"
import SearchIcon from '@mui/icons-material/Search';
import img from "./image/image2.png"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AirIcon from '@mui/icons-material/Air';
import CloudIcon from '@mui/icons-material/Cloud';
// import axios from 'axios';


function App() {

  const [value, setValue] = useState("");
  const [data, setData] = useState(null);
  const [forcastData, setForcastData] = useState([]);
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

    setValue("")
  }

  async function getForcast() {
    const res2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${API_KEY}&units=metric`)
      .then((responce) => { return responce.json() })
      .then((rslt) => { return setForcastData(rslt.list || []) })
      .catch((err) => console.log(err))

    console.log(forcastData);

  }

  return (

    <>
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
            <h1>{data?.main?.temp ? `${Math.round(data.main.temp)}°C` : "n/a"}</h1>
            <p>  {data?.name} </p>

            <div className="cont2">

              <div className="humidity">
                <ThunderstormIcon style={{ fontSize: "70px" }} />
                <h2> Humidity</h2>
                <h3>{data?.main?.humidity}% </h3>
              </div>

              <div className="humidity">
                <AirIcon style={{ fontSize: "70px" }} />
                <h2> Wind Speed</h2>
                <h3>  {data?.wind?.speed}km/h </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='wheterForcast'>
        {
          forcastData &&
          forcastData.map((item, ind) => (
            <div className='box' key={ind}>
              <CloudIcon style={{ fontSize: "40px" }} />
              <h2>{Math.round(item?.main?.temp)}°C</h2>
              <h5>{item?.dt_txt}</h5>
              <h5>humidity:{item?.main?.humidity}%</h5>
              <h5>{item?.weather[0].description}</h5>

            </div>
          ))
        }
      </div>

    </>
  )
}

export default App