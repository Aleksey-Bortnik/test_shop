import React from "react";
import Header from "./components/Header";
import { ItemList } from './ItemsList/index'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ItemList />
      </div>
    );
  }
}

export default App;
