import React, { Component, Fragment, lazy } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>

      );
  }
}
// const ReactGA = lazy(() => import("react-ga"));
import("react-ga").then(ReactGA => {
  ReactGA.initialize('UA-132415809-3')
});


export default connect()(App);
