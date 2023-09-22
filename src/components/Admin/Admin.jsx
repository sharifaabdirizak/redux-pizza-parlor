import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Admin() {
  const orderList = useSelector((store) => store.orderList);
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("in useEffect");
    getOrders();
  }, []);

  const getOrders = () => {
    console.log("getting ORDER");
    axios({
      method: "GET",
      url: "/api/order",
    })
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: "GET_ORDER_LIST",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error on GET ORDER", error);
      });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderList.map((order) => (
            <TableRow
              key={order.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {order.customer_name}
              </TableCell>
              <TableCell component="th" scope="row">
                {order.time}
              </TableCell>
              <TableCell component="th" scope="row">
                {order.type}
              </TableCell>
              <TableCell component="th" scope="row">
                {order.total}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
