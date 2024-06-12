import { useState } from "react";

type ControlsProps = {
  onStart: () => void;
  onReset: () => void;
  onPause: () => void;
};

export function Controls(props: ControlsProps) {
  const [algorithm, setAlgorithm] = useState("bubble");
  const [speed, setSpeed] = useState(50);
  const [arraySize, setArraySize] = useState(50);

  return (
    <div>
      <label>
        Sorting algorithm
        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
        >
          <option value="bubble">Bubble sort</option>
          <option value="quick">Quick sort</option>
        </select>
      </label>
      <label>
        Speed:
        <input
          type="range"
          min="1"
          max="100"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
      </label>
      <label>
        Array size:
        <input
          type="range"
          min="1"
          max="100"
          value={arraySize}
          onChange={(e) => setArraySize(Number(e.target.value))}
        />
      </label>
      <button onClick={props.onStart}>Play</button>
      <button onClick={props.onPause}>Pause</button>
      <button onClick={props.onReset}>Play</button>
    </div>
  );
}
