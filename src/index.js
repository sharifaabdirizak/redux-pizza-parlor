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
  if (action.type === "REMOVE_FROM_CART") {
    return state.filter( (pizza) => pizza !=action.payload);
  }
  return state;
};

// running cartTotal
const cartTotal = (state = 0, action) => {
  if (action.type === "ADD_TO_CART_TOTAL") {
    return state = Number(state) + Number(action.payload);
  }
  if (action.type === "REMOVE_FROM_CART_TOTAL") {
    return state = state - action.payload;
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
    cartTotal
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
