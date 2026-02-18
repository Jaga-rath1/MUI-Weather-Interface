import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./Searchbox.css"

export default function SearchBox({ updateinfo }) {
    let [City, SetCity] = useState("");
    let [Error, SetError] = useState(false);
    
    let Api_url = "https://api.openweathermap.org/data/2.5/weather";
    let Api_key = "01b6f619d1a15b90edc46a1736702ffb";

    let GetWeatherInfo = async () => {
        try {
            let response = await fetch(
                `${Api_url}?q=${City}&appid=${Api_key}&units=metric`
            );
            let data = await response.json();

           
            if(data.cod !== 200) {
                throw new Error("City not found");
            }

            let result = {
                City: `${City}`,
                Feels_like: data.main.feels_like,
                Humidity: data.main.humidity,
                Air_Pressure: data.main.pressure,
                Temp: data.main.temp,
                Temp_Min: data.main.temp_min,
                Temp_Max: data.main.temp_max,
                Weather: data.weather[0].description
            };
            return result;
        } catch (err) {
            throw err;
        }
    };

    let HandleChange = (event) => {
        SetCity(event.target.value);
    };

    let HandleSubmit = async (event) => {
        try {
            event.preventDefault();
            SetError(false); // Reset error before search
            let newinfo = await GetWeatherInfo();
            updateinfo(newinfo);
            SetCity(""); 
        } catch (err) {
            SetError(true);
        }
    };

    return (
        <div>
            <h2 className='heading'>Search Weather </h2>
            <br /><br />
            <form onSubmit={HandleSubmit}>
                <div className='searchbox'>
                    <TextField 
                        id="outlined-basic" 
                        label="Enter City" 
                        variant="outlined" 
                        value={City} 
                        onChange={HandleChange} 
                        fullWidth 
                        required 
                    />
                    <br /><br />
                    <Button variant="contained" type="submit">Submit !</Button>
                </div>
                {Error && <h3 style={{color: "red"}}>No Such Place Found</h3>}
            </form>
        </div>
    );
}