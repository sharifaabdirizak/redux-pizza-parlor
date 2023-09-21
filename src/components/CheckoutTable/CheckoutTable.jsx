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

export default function CheckoutTable() {
  const cart = useSelector((store) => store.cart);
  const dispatch=useDispatch();
  const history = useHistory();
  const handleCheckout = () => {
    dispatch({ type: "EMPTY_CART" });
    console.log("Empty cart")
    history.push("/SelectPizza");
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
            {cart.map((cartItem) => (
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
      <Button  onClick={handleCheckout}>
        Checkout
      </Button>
    </>
  );
}
