import "./App.css";
import { UseScroll } from "./hooks";

const App = () => {
  const { y } = UseScroll();

  return (
    <div style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "blue" : "red" }}>Hi</h1>
    </div>
  );
};

export default App;
