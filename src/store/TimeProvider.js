import React, { useState, useEffect } from "react";

import { TimeContext } from "./Context";

function TimeProvider({ children }) {
  const [currentTime, setCurrentTime] = useState(window.moment().locale("vi"));
  const [currentPeriod, setCurrentPeriod] = useState(
    window.moment().locale("vi").format("a")
  );

  useEffect(() => {
    let timeId = setInterval(() => {
      const time = window.moment().locale("vi");
      const period = time.format("a");
      setCurrentTime(time);
      setCurrentPeriod(period);
    }, 5000);
    return () => {
      clearInterval(timeId);
    };
  }, []);

  const state = {
    currentTime,
    setCurrentPeriod,
    currentPeriod,
  };

  return <TimeContext.Provider value={state}>{children}</TimeContext.Provider>;
}

export default TimeProvider;
