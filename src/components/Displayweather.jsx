import React, { useRef } from "react";
import Weathercard from "./Weathercard";

const Displayweather = ({ loading, weatherData, onSearchTerm }) => {
  const inputRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let inp = inputRef.current.value;
    onSearchTerm(inp);
  };

  return (
    <div>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "100px"}}>
      {" "}
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" ref={inputRef} style={{width: "200px", height: "20px", margin: "10px", border: "none", backgroundColor: "white", padding: "10px", borderRadius: "3px"}} placeholder="Enter city name"/>
        <button type="submit" style={{width: "90px", height: "40px", border: "none", backgroundColor: "#4caf50", color: "white", borderRadius: "3px"}}>Search</button>
      </form>
    </div>
    <div>
      {loading ? <p style={{textAlign: "center"}}>Loading data...</p> : weatherData.length == 1 && weatherData.map((cityWeather) => (<Weathercard cityWeather={cityWeather} key={cityWeather["last_updated_epoch"]}/>))}
      
      </div>
    </div>
  );
};

export default Displayweather;
