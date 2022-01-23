import React, { useState, useEffect } from "react";

import { TimeContext } from "./Context";

function TimeProvider({ children }) {
  const calcTimeOfDay = (data) => {
    const time = parseInt(data.format("HH"));
    return time >= 6 && time < 19 ? "day" : "night";
  };
  const [currentTime, setCurrentTime] = useState(window.moment().locale("vi"));
  const [timeOfDay, setTimeOfDay] = useState(() =>
    calcTimeOfDay(window.moment().locale("vi"))
  );

  useEffect(() => {
    let timeId = setInterval(() => {
      const time = window.moment().locale("vi");
      setCurrentTime(time);
      setTimeOfDay(calcTimeOfDay(time));
    }, 5000);
    return () => {
      clearInterval(timeId);
    };
  }, []);

  const state = {
    currentTime,
    setTimeOfDay,
    timeOfDay,
  };

  return <TimeContext.Provider value={state}>{children}</TimeContext.Provider>;
}

export default TimeProvider;
