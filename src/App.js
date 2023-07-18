import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState("");

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${apiKey}`;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Seaaarch");
    axios.get(url).then((response) => {
      setWeatherData(response.data);
      console.log(response.data);

      setLocation(" ");
    });
  };
  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <h1 className="title">Weatherr App</h1>
          <input
            type="text"
            className="search"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location..."
          />
          <button className="button" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="details">
          <p>{weatherData.name}</p>
          {weatherData.main ? (
            <h1>{weatherData.main.temp.toFixed()} °C</h1>
          ) : null}
          {weatherData.weather ? <p>{weatherData.weather[0].main}</p> : null}
          {weatherData.main ? (
            <p>{weatherData.main.humidity}% humidity</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
