
import { createStore, combineReducers } from "redux";
import { cashReducer } from "./reducers/cashReducer";
import { customerReducer } from "./reducers/costomerReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers ({
    cash: cashReducer,
    customers: customerReducer
})

export const store = createStore(rootReducer, composeWithDevTools());
