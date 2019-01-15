import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MoreI4cCard from "./modules/moreI4cCard";
import Button from "./modules/button";


class App extends Component {

  render() {
    return (
      <section>
        <BrowserRouter>
        <>
          <Button/>

          <MoreI4cCard CardText = "This is some text" CardHeading = "This is a heading" CardImage = "http://writingexercises.co.uk/images2/randomimage/pipe-sculpture.jpg" />
        </>
        </BrowserRouter>  
      </section>

      );
  }
}

export default connect()(App);
