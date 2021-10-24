import React from "react";
import { Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <div>
        <span>
          <Link to="/">Home</Link>{" "}
        </span>
        <span>
          <Link to="/about"> About</Link>{" "}
        </span>
        <span>
          <Link to="/contact">Contact us</Link>{" "}
        </span>
        <span>Services</span>
      </div>
    );
  }
}

export default Header;
