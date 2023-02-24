import "./App.css";
import { UseNotification } from "./hooks";

const App = () => {
  const triggerNotif = UseNotification("Can I steal your kimchi?", {
    body: "I love kimchi don't you?",
  });
  return (
    <div style={{ height: "1000vh" }}>
      <button onClick={triggerNotif}>hello</button>
    </div>
  );
};

export default App;
