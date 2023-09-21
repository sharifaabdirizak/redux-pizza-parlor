import { Container, Grid } from "@mui/material";

export default function DeliveryInfo({ orders }) {
  return (
    <Grid container>
     {orders.map((order) => (
        <div key={order.id}>
          <p>{order.customer_name}</p>
          <p>{order.street_address}</p>
          <p>
            {order.city}, {order.zip}
          </p>
          <p>{order.type}</p>
        </div>
      ))}
  </Grid>
  );
}
