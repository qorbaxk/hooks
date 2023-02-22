import "./App.css";
import { UseNetwork } from "./hooks";

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "i'm online" : "i'm offline");
  };

  const onLine = UseNetwork(handleNetworkChange);

  return (
    <>
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </>
  );
};

export default App;
