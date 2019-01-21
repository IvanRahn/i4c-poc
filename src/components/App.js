import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CausePage from "./pages/CausePage/CausePage";
import GlobalStyle from "./Normalize";
class App extends Component {
  render() {
    return (
      <>
          <GlobalStyle />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" render={props => <HomePage {...props}/>} />
              <Route exact path="/cause" render={props => <CausePage {...props}/>} />
              <Route exact path="/cause/${}" render={props => <CausePage {...props}/>} />
            </Switch>
          </BrowserRouter>
      </>
      );
  }
}
import("react-ga").then(ReactGA => {
  ReactGA.initialize('UA-132415809-3')
});

const mapStateToProps = (state) => {
  const {impact, impactIsFetching, impactError} = state.impact
  return {
      impact,
      impactIsFetching,
      impactError
  }
}

export default connect(mapStateToProps, {getContent})(App);