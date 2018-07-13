import React, { Component } from "react";
import AppNavbar from "./Components/AppNavbar";
import ShoppingList from "./Components/ShoppingList";
import Modal from "./Components/ItemModal";
import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <Modal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
