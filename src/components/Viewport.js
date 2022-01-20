import React from "react";

import { useStore, useTime } from "../store";
import "./css/Viewport.css";

function Viewport() {
  const { currentWeather, currentCity } = useStore();
  const { currentTime } = useTime();
  const { main, weather, dt } = currentWeather;
  function capitalizeFirstLetter(s) {
    return s[0].toUpperCase() + s.slice(1);
  }
  return (
    <>
      {main && weather && dt && (
        <div className="viewport">
          <div className="content">
            <div className="temperature">
              <p>{Math.round(main.temp)}&#176;</p>
            </div>
            <div className="city-info">
              <p className="city-name">{currentCity.name}</p>
              <p className="current-datetime">
                {currentTime && currentTime.format("HH:mm - dddd, D MMM YY")}
              </p>
            </div>
            <div className="weather-info">
              <div className="weather-icon">
                <img
                  src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                  alt="weather icon"
                />
              </div>
              <div className="weather-description">
                <p>{capitalizeFirstLetter(weather[0].description)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Viewport;
