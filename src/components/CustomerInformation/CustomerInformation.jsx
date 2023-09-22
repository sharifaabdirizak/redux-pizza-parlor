import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Card, CardContent, MenuItem, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function customInformation() {
  const dispatch = useDispatch();
  const history = useHistory();
  // const total = useSelector(store => store.cartTotal)
  let [orderToAdd, setOrderToAdd] = useState({
    customer_name: "",
    street_address: "",
    city: "",
    type: "",
    time: "",
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
      payload: orderToAdd,
    });
    setOrderToAdd({
      customer_name: "",
      street_address: "",
      city: "",
      zip: "",
      // time: "",
      type: "",
    });
    history.push("/OrderCheckout");
  }; //end addOrder

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <Container maxWidth="sm">
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Delivery Information
              </Typography>
              <form onSubmit={(event) => addOrder(event)}>
                <TextField
                  onChange={handleNameChange}
                  type="text"
                  placeholder="Name"
                  value={orderToAdd.customer_name}
                />
                <TextField
                  onChange={handleAddressChange}
                  type="text"
                  placeholder="Address"
                  value={orderToAdd.street_address}
                />
                <TextField
                  onChange={handleCityChange}
                  type="text"
                  placeholder="City"
                  value={orderToAdd.city}
                />
                <TextField
                  onChange={handleZipChange}
                  type="text"
                  placeholder="Zip Code"
                  value={orderToAdd.zip}
                />
                {/* <br />
                <label>Take Out</label>
                <input
                  onChange={handleTakeoutChange}
                  type="radio"
                  name="color"
                  value={"takeout"}
                />
                <br />
                <label>Delivery</label>
                <input
                  onChange={handleTakeoutChange}
                  type="radio"
                  name="color"
                  value={"delivery"}
                />
                <br />
                <br /> */}
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value={"takeout"}
                    control={<Radio />}
                    label="Take Out"
                    onChange={handleTakeoutChange}
                  />
                  <FormControlLabel
                    value="Delivery"
                    control={<Radio />}
                    label="Delivery"
                    onChange={handleTakeoutChange}
                  />
                </RadioGroup>
                <Button
                  type="submit"
                  variant="text"
                  size="large"
                  disableElevation
                  color="success"
                >
                  Next
                </Button>
              </form>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
}

export default customInformation;
