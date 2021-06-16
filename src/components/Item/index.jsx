import React from "react";
import "./styles.css";
import item_pic from "../../assets/images/item_pic.png";

export class Item extends React.Component {
  render() {
    return (
      <div className="item__container">
        <img src={item_pic} alt="item_image" className='item__img'></img>
        <p>description</p>
        <span>price</span>
      </div>
    );
  }
}
