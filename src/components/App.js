import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import More_i4c_card from './modules/More_i4c_card';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <More_i4c_card />
        
      </BrowserRouter>
      );
  }
}

export default connect()(App);
