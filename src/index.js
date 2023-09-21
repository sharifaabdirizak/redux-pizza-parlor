import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

//Pizza Menu
const pizzaList = (state = [], action) => {
  if (action.type === "GET_PIZZAS") {
    return action.payload;
  }

  return state;
};

// Items in the cart
const cart = (state = [], action) => {
  if (action.type === "ADD_TO_CART") {
    return [...state, action.payload];
  }

  return state;
};

//Orders
const lineItems = (state = [], action) => {
  if (action.type === "GET_LINE_ITEMS") {
    return action.payload;
  }

  return state;
};

// Store
const storeInstance = createStore(
  combineReducers({
    pizzaList,
    cart,
    lineItems,
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
