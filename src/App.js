import "./App.css";
import { UseFullScreen } from "./hooks";

const App = () => {
  const onFulls = (isFull) => {
    console.log(isFull ? "full" : "small");
  };
  const { element, triggerFull, exitFull } = UseFullScreen(onFulls);

  return (
    <div style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
        <button onClick={exitFull}>exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>make fullscreen</button>
    </div>
  );
};

export default App;
