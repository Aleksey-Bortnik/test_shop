import React from "react";
import "./styles.css";

export class Item extends React.Component {
  render() {
    return (
      <div className="item__container">
        <p>description</p>
        <span>price</span>
      </div>
    );
  }
}
