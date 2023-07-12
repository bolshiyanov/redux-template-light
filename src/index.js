import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import App from "./App";
import { Provider } from "react-redux";
import reducer from "./reducer";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(reducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
