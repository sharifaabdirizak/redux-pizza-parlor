import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function SelectPizza() {
  const dispatch = useDispatch;

  useEffect(() => {
    console.log("in useEffect");
    getPizzas();
  }, []);

  const getPizzas = () => {
    axios({
      method: "GET",
      url: "/api/pizza",
    })
      .then((response) => {
        // response.data is the array of artists
        console.log(response.data);
        dispatch({
          type: "GET_PIZZAS",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error on GET Pizza", error);
      });
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={8}>
        <div>xs=6 md=8</div>
      </Grid>
    </Grid>
  );
}
