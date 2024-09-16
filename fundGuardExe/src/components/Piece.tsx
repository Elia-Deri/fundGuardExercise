import React from "react";

import "../styles/pieceStyles.css";

export default function Piece(props: {
  x: number;
  y: number;
  weather: number | undefined;
}) {
  const { x, y, weather } = props;

  const backgroundColor = React.useMemo(() => {
    switch (true) {
      case weather === undefined:
        return "black";
      case weather! < 10:
        return "blue";
      case weather! >= 10 && weather! < 20:
        return "green";
      case weather! >= 20 && weather! < 30:
        return "yellow";
      default:
        return "red";
    }
  }, [weather]);

  return (
    <div
      id="piece"
      className={`circle ${backgroundColor}`}
      style={{ left: x, top: y }}
    >
      try pressing the arrows
      <br />
      ;^)
    </div>
  );
}
