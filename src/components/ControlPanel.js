import React, { memo } from "react";

import LocationControl from "./LocationControl";
import WeatherDetails from "./WeatherDetails";
import "./css/ControlPanel.css";

function ControlPanel() {
  return (
    <>
      <div className="control-panel">
        <LocationControl />
        <hr />
        <WeatherDetails />
      </div>
    </>
  );
}

export default memo(ControlPanel);
