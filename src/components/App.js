import React, { Component, Fragment, lazy } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ButtonLink from "./modules/ButtonLink";

class App extends Component {
  render() {
    return (
      <section>
      <BrowserRouter>
        <>

        <ButtonLink href="#" text={"link"} location={"Navbar"} {...this.props}/>
        <ButtonLink href="www.google.com" color={"green"} text="link2"/>
        <ButtonLink href="react.com" color={"red"} text="link3"/>

        </>
      </BrowserRouter>
      </section>

      );
  }
}
// const ReactGA = lazy(() => import("react-ga"));
import("react-ga").then(ReactGA => {
  ReactGA.initialize('UA-132415809-3')
});


export default connect()(App);
