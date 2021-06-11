import React from "react";
import "./styles.css";

class Button extends React.Component {
  render() {
    return <button className={this.props.className} onClick={this.props.onClick}>{this.props.name}</button>;
  }
}

export default Button;
