import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import Displayweather from './components/Displayweather';

function App() {

  const [weatherData, setWeatherData] = useState([]);
  const [getCity, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      
      let fetchWeather = async(cityName) => {
        
        try{
        setLoading(true);
        const {data} = await axios.get(`https://api.weatherapi.com/v1/current.json`, {
          params:{
            key: "7ba3fd9828d5482d80085715242702",
            q: `${cityName}`
          }
          
        });
        const {current} = data;
        console.log(current);
        setWeatherData([current]);
        }catch(error) {
          setWeatherData([]);
          
          console.log("Error", error);
          alert("Failed to fetch weather data")
        }finally {
          setLoading(false);
        }
      }
    if(getCity) {
      fetchWeather(getCity);
    }
    
    
  }, [getCity]);


  const onSearchTerm = (searchCity) => {
      setCity(searchCity)
  }

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh"}}>
      <Displayweather loading={loading} onSearchTerm={onSearchTerm} weatherData={weatherData}/>
    </div>
  )
}

export default App
