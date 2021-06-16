import React from "react";
import "./styles.css";
import { Categories } from "../Categories";
import logo from '../../assets/images/a_logo.png'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Categories className="header__buttons" />
        <img src={logo} alt="logo" className="header__logo" />
      </div>
    );
  }
}
export default Header;
