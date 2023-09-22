import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

export default function CheckoutTable() {
  const pizzas = useSelector((store) => store.cart);
  const dispatch=useDispatch();
  const history = useHistory();
  const cartTotal = useSelector(store=> store.cartTotal)
  const userInfo = useSelector(store => store.userInfo)


  const handleCheckout = () => {
  let finalOrderToAdd = {
    ...userInfo,
    total: cartTotal,
    pizzas: pizzas

  }
  // console.log("SMOKEY THE BEAR",finalOrderToAdd)
  axios
      .post(`/api/order`, finalOrderToAdd)
      .then((response) => {

        dispatch({ type: "EMPTY_CART" });
        console.log("Empty cart")
        history.push("/SelectPizza");
      
      })
      .catch((error) => {
        console.log(error);
        alert(
          `Sorry, couldn't add order infomration at this time. Try again later`
        );
      });


  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pizzas.map((cartItem) => (
              <TableRow
                key={cartItem.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {cartItem.name}
                </TableCell>
                <TableCell align="right">{cartItem.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" onClick={handleCheckout}>
        Checkout
      </Button>
    </>
  );
}
