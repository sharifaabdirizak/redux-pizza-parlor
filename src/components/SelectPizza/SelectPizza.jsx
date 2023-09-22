import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./selectPizza.css";
import PizzaCard from "../PizzaItem/PizzaItem";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom/";

export default function SelectPizza() {
  const dispatch = useDispatch();
  const pizzaList = useSelector((store) => store.pizzaList);
  const history = useHistory();

  useEffect(() => {
    console.log("in useEffect");
    getPizzas();
  }, []);

  const handleClick = () => {
    history.push("/CustomerInformation");
  };

  const getPizzas = () => {
    console.log("getting pizza");
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
        // console.log(response.data,"SMOKE")
      })
      .catch((error) => {
        console.log("error on GET Pizza", error);
      });
  };
  return (
    <div className="selectPizzaContainer">
      <div className="selectPizza">
        {pizzaList.map((pizza) => {
          return <PizzaCard key={pizza.id} pizza={pizza} />;
        })}
      </div>
      <div className="selectPizzaNext">
        <Button variant="contained" onClick={handleClick}>Next</Button>
      </div>
    </div>
  );
}

//card
