import React from "react";
import Header from "../../components/Header/index";
import { ItemList } from "../../ItemsList/index";

export class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ItemList />
      </div>
    );
  }
}

