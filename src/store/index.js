import { configureStore } from '@reduxjs/toolkit';
import { cashReducer } from './reducers/cashReducer';
import { customerReducer } from './reducers/customerReducer';
import thunk from 'redux-thunk';

const rootReducer = {
  cash: cashReducer,
  customers: customerReducer
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;