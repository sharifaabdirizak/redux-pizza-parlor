import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function customInformation() {
  let [orderToAdd, setOrderToAdd] = useState({
    customerName: "",
    address: "",
    city: "",
    type: "",
    time: "2:33pm", //TODO take in time
    zipcode: "",
  });
  let total = useSelector((store) => store.cart);

  const history = useHistory();
  const dispatch = useDispatch();
const handleTakeoutChange = (event) => {
  setOrderToAdd({ ...orderToAdd, type: event.target.value });

  const handleNameChange = (event) => {
    setOrderToAdd({ ...orderToAdd, customerName: event.target.value });
  };

  const handleAddressChange = (event) => {
    setOrderToAdd({ ...orderToAdd, address: event.target.value });
  };

  const handleCityChange = (event) => {
    setOrderToAdd({ ...orderToAdd, city: event.target.value });
  };

  const handleZipcodeChange = (event) => {
    setOrderToAdd({ ...orderToAdd, zipcode: event.target.value });
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
        getOrders();
      })
      .catch((error) => {
        console.log(error);
        alert(
          `Sorry, couldn't add order infomration at this time. Try again later`
        );
      });
    // TODO: Clear input fields
  };

  // const getOrders = () =>
  // axios
  // .get("/orders")
  // .then((response) => {
  //   setOrders(response.data);
  //   console.log("get customer information page");
  // })
  // .catch((err) => {
  //   alert("error getting customer information page, err");
  //   console.log(err);
  // });
  // };

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
            vlaue={orderToAdd.customerName}
          />
          <input
            onChange={handleAddressChange}
            type="text"
            placeholder="address"
            vlaue={orderToAdd.address}
          />
          <input
            onChange={handleCityChange}
            type="text"
            placeholder="city"
            vlaue={orderToAdd.city}
          />
          <input
            onChange={ handleZipcodeChange}
            type="text"
            placeholder="zipcode"
            vlaue={orderToAdd.zipcode}
          />
          <Radio
            checked={type === "takeout"}
            onChange={handleTakeoutChange}
            value={orderToAdd.type}
            name="radio-buttons"
            slotProps={{ input: { "aria-label": "A" } }}
          />
          <Radio
            checked={type === "delivery"}
            onChange={handleTakeoutChange}
            value={orderToadd.type}
            name="radio-buttons"
            slotProps={{ input: { "aria-label": "B" } }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}}

export default customInformation;
