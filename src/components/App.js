import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <section>Hello</section>
        
      </BrowserRouter>
      );
  }
}

export default connect()(App);
