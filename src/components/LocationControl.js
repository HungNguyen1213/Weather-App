import React, { useState } from "react";

import { cities, apiKey } from "../store/constants";
import { useStore } from "../store";

function LocationControl() {
  const [inputText, setInputText] = useState("");
  const [filterCities, setFilterCities] = useState([]);
  const { setCurrentCity, setCurrentWeather } = useStore();
  const getCurrentWeatherByCityId = async (cityId) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&lang=vi&appid=${apiKey}`;
    const response = await fetch(apiUrl).then((res) => res.json());
    setCurrentWeather(response);
  };

  const handleSearch = () => {
    const tmp = cities.filter((city) => {
      return city.name.toLowerCase().includes(inputText.toLowerCase());
    });
    setFilterCities(tmp);
  };

  const handleSelectCity = (city) => {
    setCurrentCity(city);
    getCurrentWeatherByCityId(city.id);
  };

  return (
    <>
      <div className="location-control">
        <div className="search-controller">
          <input
            value={inputText}
            placeholder="Nhập vị trí"
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="button" onClick={handleSearch} className="btn">
            <i className="fas fa-search" />
          </button>
        </div>
        <div className="list-cities">
          <ul>
            {filterCities &&
              filterCities.map((city) => (
                <li
                  className="op-7"
                  onClick={() => handleSelectCity(city)}
                  key={city.id}
                >
                  {city.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default LocationControl;
