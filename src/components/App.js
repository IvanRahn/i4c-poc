import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MoreI4cCard from "./modules/moreI4cCard";
import ButtonLink from "./modules/ButtonLink"; 
import HowItWorksCard from "./modules/HowItWorksCard";


class App extends Component {

  render() {
    return (

       <section>

        <BrowserRouter>
        <>
        <HowItWorksCard 
        cardHeading = "You choose your cause" 
        cardText = "With over 50,000 charities in Australia, how do you make the right choice? Our team of analysts determine the best charities that serve the cause of your choice."
        CardImage =
         "https://previews.123rf.com/images/canbedone/canbedone1602/canbedone160200129/52566812-happy-cartoon-businessman-standing-and-exulting-isolated.jpg"
        />
        <MoreI4cCard CardText = "This is some text" CardHeading = "This is a heading" CardImage = "http://writingexercises.co.uk/images2/randomimage/pipe-sculpture.jpg" />

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
