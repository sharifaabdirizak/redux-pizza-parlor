import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

function customInformation() {
  let [orderToADD, setOrderToAdd] = useState({ customerName: "", address: "", city: "", zipcode: "" });

  const history = useHistory();
  const dispatch = useDispatch();

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

  const handleDelivery = (event) => {
    setOrderToAdd({ ...orderToAdd, type: event.target.value });
  };

  const addOrder = (event) => {
    event.preventDefault();
    console.log("orderToAdd");

  // axios post 

   //(in the return do the get in the .then)
   
   axios
   .post(`/order`, orderToADD)
   .then((response) => {
     // Clear the form inputs
     setOrderToAdd({
       customerName: "",
       address: "",
       city: "",
       zipcode: "",
     });
     getOrders();
   })
   .catch((error) => {
     console.log(error);
     alert(`Sorry, couldn't add order infomration at this time. Try again later`);
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
            onChange={handleZipcode}
            type="text"
            placeholder="zipcode"
            vlaue={orderToAdd.zipcode}
          />
        </form>
        <button type="submit">Submit</button>
      </div>
    </>
  );
  }

export default customInformation;
