import React from "react";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

const Routerapp = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
  
        </Routes>
      </Router>
    </div>
  );
};

export default Routerapp;
