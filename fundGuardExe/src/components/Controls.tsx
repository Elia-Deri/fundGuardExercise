import { getRandomPos } from "../utils/getPositions";

export default function Controls(props: {
  moveDelta: (dx: number, dy: number) => void;
  setPos: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  const { moveDelta, setPos } = props;

  return (
    <div id="controls-wrapper">
      <button id="btn-up" className="button" onClick={() => moveDelta(0, -100)}>
        U
      </button>

      <br />
      <button
        id="btn-left"
        className="button"
        onClick={() => moveDelta(-100, 0)}
      >
        L
      </button>

      <button
        id="btn-right"
        className="button"
        onClick={() => moveDelta(100, -0)}
      >
        R
      </button>

      <br />
      <button
        id="btn-down"
        className="button"
        onClick={() => moveDelta(0, 100)}
      >
        D
      </button>

      <br />
      <button className="button reset" onClick={() => setPos([100, 50])}>
        reset
      </button>

      <button
        className="button randomize"
        onClick={() => setPos(getRandomPos())}
      >
        randomize
      </button>
    </div>
  );
}
