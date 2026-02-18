import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
import "./WeatherApp.css";
export default function WeatherApp(){
    let[WeatherInfo,SetweatherInfo] = useState({
        City:"Delhi",
        Feels_like : 28.5,
        Humidity : 200,
        Air_Pressure : 1100,
        Temp : 28.5,
        Temp_Min : 25.5,
        Temp_Max : 30.5,
        Weather : "haze"
    })
    let updateinfo = (newinfo)=>{
        SetweatherInfo(newinfo);
    }
    return(
        <div className="weather-app-container">
            <h1 className="main-title">Weather App </h1>
            <br />
            <p className="spidy-tag">Built with ❤️ by BuildWithJK</p>
            <br />
            <SearchBox updateinfo={updateinfo}/>
            <br />
            <InfoBox Info = {WeatherInfo}/>
        </div>
    )
}