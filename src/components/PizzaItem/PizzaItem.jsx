// import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import CardMedia from "@mui/material/CardMedia";

export default function PizzaCard({ pizza }) {
  const dispatch = useDispatch();
  const cart = useSelector(store => store.cart);

  const handleAdd = () => {
    //if cart already contains pizza.name, don't add another.
    // array.some returns true if found
    if (cart.some( e => e.name == pizza.name)){
      return null
    }

    dispatch({
      type: "ADD_TO_CART",
      payload: pizza
    })
    dispatch({
      type: "ADD_TO_CART_TOTAL",
      payload: pizza.price
    })
  };

  const handleRemove = () => {
    //if cart does not contain pizza.name Dont reduce the total
    if (!cart.some( e=> e.name == pizza.name)){
      return null
    }

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: pizza
    })
    dispatch({
      type: "REMOVE_FROM_CART_TOTAL",
      payload: pizza.price
    })
  };

  return (
    <Card className="pizzaCard" sx={{ minWidth: 275 }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <CardMedia
          sx={{ height: 140 }}
          image= {pizza.image_path}
          title= {pizza.image_path}
        />
        <Typography variant="h5" component="div">
          {pizza.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {pizza.description}
        </Typography>
        <Typography variant="body2">
          {pizza.price}
          {/* <br />
          {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleAdd} size="medium">
          Add (max 1)
        </Button>
        <Button onClick={handleRemove} size="medium">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
