import React, { useMemo } from "react";

import Viewport from "./Viewport";
import ControlPanel from "./ControlPanel";
import { useTime } from "../store";

function Container() {
  const { timeOfDay } = useTime();
  const background = useMemo(() => {
    return require(`../assets/${timeOfDay}/sky.jpg`);
  }, [timeOfDay]);

  return (
    <>
      <div
        className="container"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <Viewport />
        <ControlPanel />
      </div>
    </>
  );
}

export default Container;
