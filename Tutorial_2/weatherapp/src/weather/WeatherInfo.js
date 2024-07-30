function WeatherInfo({ weatherData, cityName }) {
  return (
    <>
      {/* Container for weather information */}
      <div className="weather-info text-center card bg-light">

        {/* Display the city name */}
        <h3>{cityName}</h3>

        {/* Display weather icon */}
        <i className="bi bi-cloud-haze text-center display-2 text-warning"></i>

        {/* Conditional rendering based on weather data availability */}
        {
          // Check if weatherData.main is undefined
          typeof weatherData.main === "undefined" ? (
            // If weather data is undefined, display "No data found"
            <p>No data found</p>
          ) : (
            // If weather data is available, display weather information
            <>
              {/* Display current temperature */}
              <h3>{weatherData.main.temp}<sup>o</sup> Cel</h3>

              {/* Horizontal line */}
              <hr />

              {/* Display additional weather information */}
              <div className="row">
                {/* Max temperature */}
                <div className="col-sm-4">{weatherData.main.temp_max}<sup>o</sup> Cel<br /><b>Max Temp</b></div>
                {/* Min temperature */}
                <div className="col-sm-4">{weatherData.main.temp_min}<sup>o</sup> Cel<br /><b>Min Temp</b></div>
                {/* Humidity */}
                <div className="col-sm-4">{weatherData.main.humidity}%<br /><b>Humidity</b></div>
              </div>
            </>
          )
        }
      </div>
    </>
  );
}

export default WeatherInfo;
