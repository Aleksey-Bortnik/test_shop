import React from "react";
import Button from "../Button";

const categories = ["WOMEN", "MEN", "KIDS", "", ""];

export class Categories extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="categories__container">
          {categories.map((el, index) => {
            return <Button name={el} />;
          })}
        </div>
      </div>
    );
  }
}
