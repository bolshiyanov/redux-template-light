import React from "react";
import {
  addCustomerAction,
  removeCustomerAction,
} from "./store/reducers/customerReducer";
import {
  addCashAction,
  getAnyCashAction,
  getCashAction,
} from "./store/reducers/cashReducer";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "./utils/api/customerApi";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = () => {
    dispatch(addCashAction());
  };
  const getCash = () => {
    dispatch(getCashAction());
  };
  const getAnyCash = (cash) => {
    dispatch(getAnyCashAction(cash));
  };
  const addCustomer = (name) => {
    const customer = [{ name: name }, { id: Date.now() }];
    dispatch(addCustomerAction(customer));
  };
  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
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
      <button onClick={() => getAnyCash(Number(prompt()))}>Get any cash</button>
      <br />
      <div style={{ display: "flex", flexFlow: "row" }}>
        <button onClick={() => addCustomer(prompt())}>Add one customer</button>

        <button onClick={() => dispatch(fetchCustomers())}>
          Add many customer
        </button>
      </div>
      {customers.length > 0 ? (
        <div className="customer-box">
          {customers.map((customer) => (
            <div
              onClick={() => removeCustomer(customer)}
              key={customer.id}
              className="customer-item"
            >
              {customer.name},&nbsp;
            </div>
          ))}
        </div>
      ) : (
        <div>We have not any customers</div>
      )}

      <h1 style={{ position: "absolute", top: 10, fontSize: 40 }}>Redux-Thunk</h1>
      <h2 style={{ position: "absolute", top: 70, fontSize: 20 }}>Template for React</h2>
      <h3 style={{ position: "absolute", bottom: 30, fontSize: 14 }}>
        <a href="https://github.com/bolshiyanov/redux-template-light/tree/main">
          Code is here: GitHub
        </a>
      </h3>
      <h4 style={{ position: "absolute", bottom: 10, fontSize: 10 }}>
        <a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related">
          Install extension: Redux devtools
        </a>
      </h4>
    </div>
  );
}

export default App;
