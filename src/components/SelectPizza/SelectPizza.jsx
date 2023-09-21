import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import './selectPizza.css'
import PizzaCard from "../PizzaItem/PizzaItem";

export default function SelectPizza() {
  const dispatch = useDispatch();
  const pizzaList = useSelector((store) => store.pizzaList);
  

  useEffect(() => {
    console.log("in useEffect");
    getPizzas();
  }, []);

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
    <div className="selectPizza">
    {pizzaList.map((pizza) => {return(<PizzaCard key={pizza.id} pizza={pizza} />)
      })}
    </div>
  );
}


//card