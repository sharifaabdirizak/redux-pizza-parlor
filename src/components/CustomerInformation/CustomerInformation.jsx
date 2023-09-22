import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Radio, RadioGroup } from "@mui/material";
import FormControlLabel from "@mui/material";

function customInformation() {
  const dispatch = useDispatch();
  const total = useSelector(store => store.cartTotal)
  let [orderToAdd, setOrderToAdd] = useState({
    customer_name: "",
    street_address: "",
    city: "",
    type: "",
    time: "2:33pm", //TODO take in time
    zip: "",
  });

  const handleTakeoutChange = (event) => {
    setOrderToAdd({ ...orderToAdd, type: event.target.value });
  };
  const handleNameChange = (event) => {
    setOrderToAdd({ ...orderToAdd, customer_name: event.target.value });
  };

  const handleAddressChange = (event) => {
    setOrderToAdd({ ...orderToAdd, street_address: event.target.value });
  };

  const handleCityChange = (event) => {
    setOrderToAdd({ ...orderToAdd, city: event.target.value });
  };

  const handleZipChange = (event) => {
    setOrderToAdd({ ...orderToAdd, zip: event.target.value });
  };

  const addOrder = (event) => {
    event.preventDefault();
    // console.log("orderToAdd");
    dispatch({
      type: "COLLECT_USER_INFO",
      payload: orderToAdd})
    setOrderToAdd({
      customer_name: "",
      street_address: "",
      city: "",
      zip: "",
      type: "",
      total: "",
      time: "",
    });
  }; //end addOrder

    
    // axios
    //   .post(`/api/order`, finalOrderToAdd)
    //   .then((response) => {
    //     // Clear the form inputs
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     alert(
    //       `Sorry, couldn't add order infomration at this time. Try again later`
    //     );
    //   });


  return (
    <>
      <div>
      
        <form onSubmit={(event) => addOrder(event)}>
          <input
            onChange={handleNameChange}
            type="text"
            placeholder="name"
            value={orderToAdd.customer_name}
          />
          <input
            onChange={handleAddressChange}
            type="text"
            placeholder="address"
            value={orderToAdd.street_address}
          />
          <input
            onChange={handleCityChange}
            type="text"
            placeholder="city"
            value={orderToAdd.city}
          />
          <input
            onChange={handleZipChange}
            type="text"
            placeholder="Zip Code"
            value={orderToAdd.zip}
          />
            <br/>
            <label>Take Out</label>
            <input onChange={handleTakeoutChange} type="radio" name="color" value={'takeout'}/>
            <br/>
            <label>Delivery</label>
            <input onChange={handleTakeoutChange} type="radio" name="color" value={'delivery'}/>
            <br/><br/>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default customInformation;
