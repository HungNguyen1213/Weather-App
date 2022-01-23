import React, { useEffect, useState } from "react";

import { Context } from "./Context";
import { apiKey } from "./constants";

function Provider({ children }) {
  const [currentCity, setCurrentCity] = useState({
    id: 1581130,
    name: "Hà Nội",
  });
  const [currentWeather, setCurrentWeather] = useState({});

  useEffect(() => {
    getInitCurrentWeather();
  }, []);

  const getInitCurrentWeather = async () => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=1581130&lang=vi&units=metric&appid=${apiKey}`;
    const response = await fetch(apiURL).then((res) => res.json());
    setCurrentWeather(response);
  };

  const state = {
    currentCity,
    setCurrentCity,
    currentWeather,
    setCurrentWeather,
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
}

export default Provider;
