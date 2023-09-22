// App.js
import SelectPizza from "../SelectPizza/SelectPizza";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import CustomerInformation from "../CustomerInformation/CustomerInformation";
import OrderCheckout from "../OrderCheckout/OrderCheckout.jsx";
import Admin from "../Admin/Admin";
import { Button } from "@mui/base";
function App() {
  return (
    <Router>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/SelectPizza">SelectPizza</Link>
      </li>
      <li>
        <Link to="/CustomerInformation">CustomerInformation</Link>
      </li>
      <li>
        <Link to="/OrderCheckout">OrderCheckout</Link>
      </li>
      <li>
        {/* Remove this later */}
        <Link to="/Admin">Admin</Link>
      </li>
      <Route path="/">
        <Header />
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>

      <Route exact path="/SelectPizza">
        <SelectPizza />
      </Route>

      <Route exact path="/CustomerInformation">
        <CustomerInformation />
      </Route>

      <Route exact path="/OrderCheckout">
        <OrderCheckout />
      </Route>
      <Route exact path="/Admin">
        <Admin />
      </Route>
    </Router>
  );
}

export default App;
