import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import GlobalStyle from "./Normalize";
class App extends Component {
  render() {
    return (
      <>
          <GlobalStyle />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" render={props => <HomePage {...props}/>} />
            </Switch>
          </BrowserRouter>
      </>
      );
  }
}
import("react-ga").then(ReactGA => {
  ReactGA.initialize('UA-132415809-3')
});
export default connect()(App);