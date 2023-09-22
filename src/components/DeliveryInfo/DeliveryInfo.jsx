import { Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";

export default function DeliveryInfo({ orders }) {
  const order = useSelector(store =>store.orders)
  // console.log("SMOKE", order)
  return (
    <Grid container>
        <div key={order.id}>
          <p>{order.customer_name}</p>
          <p>{order.street_address}</p>
          <p>
            {order.city}, {order.zip}
          </p>
          <p>{order.type}</p>
        </div>
    </Grid>
  );
}
