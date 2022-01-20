import React, { useMemo } from "react";

import Viewport from "./Viewport";
import ControlPanel from "./ControlPanel";
import { useTime } from "../store";

function Container() {
  const { currentPeriod } = useTime();
  const background = useMemo(() => {
    return require(`../assets/${currentPeriod}/sky.jpg`);
  }, [currentPeriod]);

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
