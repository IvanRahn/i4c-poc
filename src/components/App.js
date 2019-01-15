import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ButtonLink from "./modules/ButtonLink";


class App extends Component {
  render() {
    return (
      <section>
      <BrowserRouter>
        <>

        <ButtonLink href="#" text={"link"}/>
        <ButtonLink href="google.com" color={"green"} text="link2"/>
        <ButtonLink href="react.com" color={"red"} text="link3"/>

        </>
      </BrowserRouter>
      </section>

      );
  }
}

export default connect()(App);
