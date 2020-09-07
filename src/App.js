import React, { useState } from "react";
import "./styles.css";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Item from "./components/Item";
import data from "./data";
import { Link, Route, Switch } from "react-router-dom";

export default function App() {
  const [products, setProduct] = useState(data);
  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Emily's Trinkets</h1>
        <div className="nav-links">
          {/* Put nav links here */}
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
        </div>
      </nav>
      {/* Rendered by Route components 👇 */}

      <Switch>
        <Route path="/shop/:slug">
          <Item items={products} />
        </Route>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/shop"
          render={(props) => {
            console.log("react router props", props);
            return <Shop history={props.history} items={products} />;
          }}
        />
      </Switch>
    </div>
  );
}
