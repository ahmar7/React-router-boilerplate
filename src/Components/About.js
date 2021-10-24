import React from "react";
import Header from "./Header";
import Image from "../images/book-with-green-board-background.jpg";
class About extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <img width="902px" src={Image} alt="" />
        <h1>About page</h1>
      </div>
    );
  }
}
export default About;
