import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckoutTable from "../CheckoutTable/CheckoutTable";
import DeliveryInfo from "../DeliveryInfo/DeliveryInfo";
import axios from "axios";
import { Container } from "@mui/material";

export default function OrderCheckout() {
  const orders = useSelector((store) => store.orders);
  const dispatch = useDispatch();





  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = () => {
    axios
      .get("/api/order")
      .then((response) => {
        dispatch({
          type: "GET_ORDERS",
          payload: response.data,
        });
      })
      .catch((err) => {
        alert("error getting orders information page, err");
        console.log(err);
      });
  };

  return (
    <>
      <Container >
        <h2>Checkout</h2>
        <DeliveryInfo orders={orders} />
      <CheckoutTable  />
      </Container>
    </>
  );
}
