import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Button from "./modules/button";


class App extends Component {
  render() {
    return (
      <section>
      <BrowserRouter>
      <Button/>

      </BrowserRouter>
        </section>

      );
  }
}

export default connect()(App);
