import React from "react";

import Piece from "./components/Piece";
import Controls from "./components/Controls";
import { useInitPage } from "./utils/useInitPage";
import { getXPos, getYPos } from "./utils/getPositions";

import "./styles/baseStyles.css";

export default function App() {
  const [pos, setPos] = React.useState([100, 50]);
  const [weather, setWeather] = React.useState<number | undefined>();

  const moveDelta = (dx: number, dy: number) => {
    setPos((prev) => {
      const newX = getXPos(prev[0], dx);
      const newY = getYPos(prev[1], dy);
      return [newX, newY];
    });
  };

  useInitPage(moveDelta, setWeather);

  return (
    <div className="App">
      <Piece x={pos[0]} y={pos[1]} weather={weather} />

      <Controls moveDelta={moveDelta} setPos={setPos} />
    </div>
  );
}
