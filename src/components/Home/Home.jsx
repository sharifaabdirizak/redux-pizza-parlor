import { Button, IconButton, Stack, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import ButtonLink from "../ButtonLink/ButtonLink";

export default function Home() {
  // const cart = useSelector((store) => store.cart);
  const cartTotal = useSelector((store) => store.cartTotal)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Prime Pizza
          </Typography>
          <Stack direction="row" spacing={2}>
          <ButtonLink to="/" color="inherit">Home</ButtonLink>
            <ButtonLink to="/SelectPizza" color="inherit">Menu</ButtonLink>
            <ButtonLink to="/OrderCheckout" color="inherit">CART</ButtonLink>
          </Stack>
          <Typography variant="h8" component="div">
            TOTAL: ${cartTotal}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
