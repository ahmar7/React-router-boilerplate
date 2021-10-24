import React from "react";
import Header from "./Header";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Home page</h1>
        <img src="images/profilepic.jpg" alt="logo"></img>
      </div>
    );
  }
}

export default Home;
