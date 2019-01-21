import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CauseHomePage from "./pages/CausePage/CauseHomePage";
import CausePage from "./pages/CausePage/CausePage";
import GlobalStyle from "./Normalize";
import {getContent} from "./../actions"

class App extends Component {
  componentDidMount() {
    this.props.getContent('causes')

  }

  render() {
    console.log("Cause: ", this.props)
    return (
      <>
          <GlobalStyle />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" render={props => <HomePage {...props}/>} />
              <Route exact path="/cause" render={props => <CauseHomePage {...props}/>} />
              <Route exact path="/cause/:slug" render= {props =><CausePage {...props}/>} />
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
  const {cause, causeIsFetching, causeError} = state.cause
  return {
    cause,
    causeIsFetching,
    causeError
  }
}


export default connect(mapStateToProps, {getContent})(App);