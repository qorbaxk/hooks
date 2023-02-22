import "./App.css";
import { UseBeforeLeave } from "./hooks";

const App = () => {
  const begForLife = () => console.log("plz dont leave");
  UseBeforeLeave(begForLife);
  return (
    <>
      <h1>hi!</h1>
    </>
  );
};

export default App;
