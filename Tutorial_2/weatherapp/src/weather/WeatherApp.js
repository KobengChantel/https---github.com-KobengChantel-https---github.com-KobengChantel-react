import { useState } from "react";
import WeatherInfo from "./WeatherInfo";

function WeatherApp() {
  // State variables to manage city name, weather data, and error messages
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(null);

  // Function to handle changes in the input field for city name
  const changeCityInput = (e) => {
    setCityName(e.target.value);
  };

  // Function to fetch weather data from the API
  const fetchWeatherAPI = async () => {
    try {
      // Fetch weather data using cityName
      const API_KEY = '3e8e37f9b3ff3b37dfeb2af7260f71d6';
      const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;
      const resp = await fetch(APIurl); // Fetch weather data

      // Check if response is successful
      if (!resp.ok) {
        throw new Error(`Error: ${resp.statusText}`);
      }

      // Convert response to JSON
      const respJson = await resp.json();

      // Update state with weather data and clear error
      setWeatherData(respJson);
      setError(null);
    } catch (err) {
      // If an error occurs during API request, set error state
      setError(err.message);
    }
  };

  // Function to handle onBlur event of input field (fetch weather data)
  const handleBlur = () => {
    // If cityName is not empty, fetch weather data
    if (cityName) {
      fetchWeatherAPI();
    }
  };

  return (
    <>
      {/* Container for the weather app */}
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            {/* Title of the weather app */}
            <h3 className="text-center text-success">React Weather App</h3>

            {/* Input field for entering city name */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter City Name"
                onChange={changeCityInput}
                onBlur={handleBlur}
                value={cityName}
              />
            </div>

            {/* Display error message if there's an error */}
            {error && <p className="text-danger">{error}</p>}

            {/* Render the WeatherInfo component to display weather data */}
            <WeatherInfo cityName={cityName} weatherData={weatherData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherApp;
