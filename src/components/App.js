import React, { Component, Fragment, lazy } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MoreI4cCard from "./modules/moreI4cCard";
import ButtonLink from "./modules/ButtonLink";

class App extends Component {

  render() {
    return (
      
       <section>

        <BrowserRouter>
        <>
        <HowItWorksCard 
        cardHeading = "You choose your cause" 
        cardText = "With over 50,000 charities in Australia, how do you make the right choice? Our team of analysts determine the best charities that serve the cause of your choice."
        />
        <MoreI4cCard CardText = "This is some text" CardHeading = "This is a heading" CardImage = "http://writingexercises.co.uk/images2/randomimage/pipe-sculpture.jpg" />

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
