import React from "react";
import "./styles.css";
import { Item } from "../components/Item/index";

export class ItemList extends React.Component {
  render() {
    return (
      <div className="itemList__wrapper">
        <h1 className="itemList__title">Title</h1>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    );
  }
}
