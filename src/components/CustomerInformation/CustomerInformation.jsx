import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Card, CardContent, MenuItem, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./CustomerInformation.css";

//TESTING MATERIAL UI
import { styled } from "@mui/system";
import { Badge, badgeClasses } from "@mui/base/Badge";

function customInformation() {
  const dispatch = useDispatch();
  const history = useHistory();
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

  function BadgeContent() {
    return (
      <Box
        component="span"
        sx={{
          width: 40,
          height: 40,
          borderRadius: "12px",
          background: (theme) =>
            theme.palette.mode === "dark" ? grey[400] : grey[300],
          display: "inline-block",
          verticalAlign: "middle",
        }}
      />
    );
  }

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

                <RadioGroup
                  className="radio-container"
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
                    className="customerInformation"
                    value="Delivery"
                    control={<Radio />}
                    label="Delivery"
                    onChange={handleTakeoutChange}
                  />
                </RadioGroup>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disableElevation
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
