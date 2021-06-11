import React from "react";
import "./styles.css";
import { Categories } from "./components";
import logo from '../../assets/images/a_logo.png'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Categories />
        <img src={logo} alt="logo" />
      </div>
    );
  }
}
export default Header;
