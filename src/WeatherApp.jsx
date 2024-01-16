import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    let [weather,setweather]=useState({
        city: "Wonderland",
        feels_like: 23.26,
        humidity: 29,
        temmax: 24.04,
        temp: 24.04,
        tempmin: 24.04,
        weather: "clear sky",

    });
    let updateInfo=(result)=>{
        setweather(result)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h2>Search For Weather</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weather} />
    </div>
  );
}
