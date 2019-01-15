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

        <ButtonLink text={"link"}/>
        <ButtonLink color={"green"} text="link2"/>
        <ButtonLink color={"red"} text="link3"/>

        </>
      </BrowserRouter>
      </section>

      );
  }
}

export default connect()(App);
