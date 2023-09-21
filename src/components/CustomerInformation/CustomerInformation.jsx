import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Radio, RadioGroup } from "@mui/material";
import FormControlLabel from "@mui/material";

function customInformation() {
  let [orderToAdd, setOrderToAdd] = useState({
    customerName: "",
    address: "",
    city: "",
    type: "",
    time: "2:33pm", //TODO take in time
    zip: "",
  });
  let total = useSelector((store) => store.cart);

  const handleTakeoutChange = (event) => {
    setOrderToAdd({ ...orderToAdd, type: event.target.value });
  };
  const handleNameChange = (event) => {
    setOrderToAdd({ ...orderToAdd, customerName: event.target.value });
  };

  const handleAddressChange = (event) => {
    setOrderToAdd({ ...orderToAdd, address: event.target.value });
  };

  const handleCityChange = (event) => {
    setOrderToAdd({ ...orderToAdd, city: event.target.value });
  };

  const handleZipChange = (event) => {
    setOrderToAdd({ ...orderToAdd, zip: event.target.value });
  };

  const addOrder = (event) => {
    event.preventDefault();
    console.log("orderToAdd");

    // axios post

    //(in the return do the get in the .then)

    const finalOrderToAdd = {
      ...orderToAdd,
      type: type,
      total: total,
      time: time,
    };

    axios
      .post(`/api/order`, finalOrderToAdd)
      .then((response) => {
        // Clear the form inputs
        setOrderToAdd({
          customer_name: "",
          street_address: "",
          city: "",
          zip: "",
          type: "",
          total: "",
          time: "",
        });
      })
      .catch((error) => {
        console.log(error);
        alert(
          `Sorry, couldn't add order infomration at this time. Try again later`
        );
      });
    // TODO: Clear input fields
  }; //end addOrder

  return (
    <>
      <div>
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <form onSubmit={(event) => addOrder(event)}>
          <input
            onChange={handleNameChange}
            type="text"
            placeholder="name"
            value={orderToAdd.customerName}
          />
          <input
            onChange={handleAddressChange}
            type="text"
            placeholder="address"
            value={orderToAdd.address}
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
            <input onClick={handleTakeoutChange} type="radio" name="color" value={addOrder.type}/>
            <br/>
            <label>Delivery</label>
            <input onClick={handleTakeoutChange} type="radio" name="color" value={addOrder.type}/>
            <br/><br/>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default customInformation;
