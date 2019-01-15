import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MoreI4cCard from "./modules/moreI4cCard";
import Button from "./modules/button";


class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <MoreI4cCard />
        
        <section>Hello</section>
        <Button/>
      </BrowserRouter>
      );
  }
}

export default connect()(App);
