import "./App.css";
import React, { useEffect, useState } from "react";

const App = () => {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [anumber, setAnumber] = useState(0);
  useEffect(() => {
    sayHello();
  }, []);
  return (
    <>
      <h1>hi!</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(anumber + 1)}>{anumber}</button>
    </>
  );
};

export default App;
