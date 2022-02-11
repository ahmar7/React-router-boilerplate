import React from "react";
import { Link } from "react-router-dom";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Home from "../pages/Home";
import Collection from "../pages/Collection";
import Product from "../pages/Product";
class Header extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    );
  }
}

export default Header;
