import React from "react";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);

  const addCash = () => {
    dispatch({ type: "ADD_CASH", payload: 5 });
  };
  const getCash = () => {
    dispatch({ type: "GET_CASH", payload: 5 });
  };
  const getAnyCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  return (
    <div className="App">
      <div style={{ fontSize: 20 }}>Cash ${cash}</div>
      <br />
      <div style={{ display: "flex", flexFlow: "row" }}>
        <button onClick={() => addCash()}>Add cash $5</button>
        <button onClick={() => getCash()}>Get cash $5</button>
      </div>
      <br />
      <button onClick={() => getAnyCash(Number(prompt()))}>
        Get any cash{" "}
      </button>
      <h1 style={{position: 'absolute', top: 10,fontSize: 40}}>Redux</h1>
      <h2 style={{ position: "absolute", top: 70, fontSize: 20 }}>Lesson 1</h2>
      <h3 style={{ position: "absolute", bottom: 30, fontSize: 14 }}><a href="https://github.com/bolshiyanov/redux-template-light/tree/main">Code is here: GitHub</a></h3>
      </div>

  );
}

export default App;
