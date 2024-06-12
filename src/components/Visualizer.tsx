type VisualizerProps = {
  array: number[];
};

export function Visualizer(props: VisualizerProps) {
  return (
    <div
      style={{
        display: "flex",
        // TODO: This probably should be flex-start so the length of the bar is not hitting the top of the container
        alignItems: "flex-end",
        height: "300px",
        border: "1px solid black",
      }}
    >
      {props.array.map((value, index) => (
        // TODO: Still need to figure out the best way of this styling
        <div
          key={index}
          style={{
            margin: "0 1px",
            backgroundColor: "turquoise",
            width: "10px",
            height: `${value}px`,
            textAlign: "center",
            color: "black",
          }}
        >
          {/* {value} */}
        </div>
      ))}
    </div>
  );
}
