import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SeacrchBox.css";
import { useState } from "react";
let API_KEY =import.meta.env.VITE_API_KEY
let API_URl = "https://api.openweathermap.org/data/2.5/weather?"




export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let [err,seterr]=useState(false)

  let HandleChange =(e)=>{
   setCity(e.target.value)
   
  }
  let HandleSubmit = async (e)=>{
    try{
      e.preventDefault();
      let info= await getData()
      updateInfo(info)
        setCity("")
    }catch(err){
      seterr(true)
    }

  }

 async function getData(){

  try{
    let res = await fetch(`${API_URl}q=${city}&appid=${API_KEY}&units=metric`);
    let response= await res.json();
    let result ={
        city:city,
        temp:response.main.temp,
        tempmin:response.main.temp_min,
        temmax:response.main.temp_max,
        humidity:response.main.humidity,
        feels_like:response.main.feels_like,
        weather:response.weather[0].description,
    } 
    return result
  }catch(err){
    throw err
 
  }
  }
  

  return (
    <div className="SeacrchBox">
       
      <form onSubmit={HandleSubmit}>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={city}
          onChange={HandleChange}
        />{" "}
        <br /> <br />
        <Button variant="contained" onClick={HandleSubmit}>Search</Button>
      </form>
      <h3 style={{color:"red"}} >{ err && "no such place exists" }</h3>
    </div>
  );
}
