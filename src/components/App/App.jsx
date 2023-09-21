// App.js
import SelectPizza from "../SelectPizza/SelectPizza";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/SelectPizza">Select Pizza</Link>
        </li>
        <li>
          <Link to="/CustomerInformation">All Artists</Link>
        </li>
        <li>
          <Link to="/OrderCheckout">All Artists</Link>
        </li>
        <li>
          {/* Remove this later */}
          <Link to="/Admin">Admin</Link>
        </li>
      </div>
      <Route path="/">
        {/* <Home /> */}
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Prime Pizza</h1>
          </header>

          <img src="images/pizza_photo.png" />
          <p>Pizza is great.</p>
        </div>
      </Route>

      <Route exact path="/SelectPizza">
        <SelectPizza />
      </Route>

      <Route exact path="/CustomerInformation">
        {/* <CustomerInformation /> */}
      </Route>

      <Route exact path="/OrderCheckout">
        {/* <OrderCheckout /> */}
      </Route>
      <Route exact path="/Admin">
        {/* <Admin /> */}
      </Route>
    </Router>
  );
}

export default App;
