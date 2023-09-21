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

  if (action.type === "EMPTY_CART") {
    return [];
  }

  return state;
};

//Orders
const orders = (state = [], action) => {
  if (action.type === "GET_ORDERS") {
    return action.payload;
  }

  return state;
};

//Line Items
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
    orders,
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
