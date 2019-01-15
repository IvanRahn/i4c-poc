import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Button from "./modules/button";
import HowItWorksCard from "./modules/HowItWorksCard";


class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
        <>
        {/* <Button/> */}

        <HowItWorksCard 
        cardHeading = "You choose your cause" 
        cardText = "With over 50,000 charities in Australia, how do you make the right choice? Our team of analysts determine the best charities that serve the cause of your choice."
        />
        
        </>
      </BrowserRouter>
      );
  }
}

export default connect()(App);
