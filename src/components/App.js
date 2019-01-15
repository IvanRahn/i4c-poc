import React, { Component, Fragment, lazy } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";

class App extends Component {

  render() {
    return (
<<<<<<< HEAD
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
=======

       <section>

        <BrowserRouter>
        <>
        
        <HowItWorksCard 
        cardHeading = "You choose your cause" 
        cardText = {
        <div>
          <p> With over 50,000 charities in Australia, how do you make the right choice? </p> 
          <p> Our team of analysts determine the best charities that serve the cause of your choice. </p>
        </div>
        }
        CardImage = {image}
        />

        <MoreI4cCard CardText = "This is some text" CardHeading = "This is a heading" CardImage = {image} />

        <ButtonLink href="#" text={"link"} location={"Navbar"} />
        <ButtonLink href="www.google.com" color={"green"} text="link2"/>
        <ButtonLink href="react.com" color={"red"} text="link3"/>

        </>
>>>>>>> 51795fe21c0cc88cfa4d3b11dac6050f0759c8a1
      </BrowserRouter>

      );
  }
}
// const ReactGA = lazy(() => import("react-ga"));
import("react-ga").then(ReactGA => {
  ReactGA.initialize('UA-132415809-3')
});


export default connect()(App);
