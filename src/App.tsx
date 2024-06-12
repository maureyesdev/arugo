import { useState, useRef, useEffect } from "react";
import { Controls } from "./components/Controls";
import { Visualizer } from "./components/Visualizer";

export function App() {
  const [array, setArray] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const randomArray = Array.from(
      { length: 50 },
      () => Math.floor(Math.random() * 300) + 20
    );
    setArray(randomArray);
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const startSorting = () => {
    setIsPlaying(true);
    // TODO: Add sorting logic
    // TODO: Need to figure out a way to animate the sorting
  };

  const pauseSorting = () => {
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <div>
      <Controls
        onStart={startSorting}
        onReset={resetArray}
        onPause={pauseSorting}
      />
      <Visualizer array={array} />
    </div>
  );
}
