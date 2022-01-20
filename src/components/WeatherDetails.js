import React from "react";

import { useStore } from "../store";

function WeatherDetails() {
  const { clouds, wind, main } = useStore().currentWeather;
  return (
    <>
      <div className="weather-details">
        <p className="weather-details__title">Chi tiết</p>
        <ul>
          {clouds && wind && main && (
            <>
              <li>
                <span className="op-7">Độ che phủ mây</span>
                <span>{clouds.all}%</span>
              </li>
              <li>
                <span className="op-7">Độ ẩm</span>
                <span>{main.humidity}%</span>
              </li>
              <li>
                <span className="op-7">Tốc độ gió</span>
                <span>{wind.speed}km/h</span>
              </li>
              <li>
                <span className="op-7">Áp suất</span>
                <span>{main.pressure}hPa</span>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}

export default WeatherDetails;
