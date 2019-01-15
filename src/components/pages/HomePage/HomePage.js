import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import MoreI4cCard from "../../modules/MoreI4cCard";
import ButtonLink from "../../modules/ButtonLink";
import ImpactSection from './ImpactSection';
import HowItWorksCard from './../../modules/HowItWorksCard'
import image from './../../../img/cartoon.jpg'
class HomePage extends Component {
    
    render() {
        
        return (
            <section>
                <h1>Welcome To HomePage</h1>
                <ImpactSection />
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
                <BrowserRouter>
                    <>
                    <MoreI4cCard CardText = "This is some text" CardHeading = "This is a heading" CardImage = {image}/>
                    <ButtonLink href="#" text={"link"} {...this.props} section={"The only section"}/>
                    <ButtonLink href="google.com" color={"green"} text="link2"/>
                    <ButtonLink href="react.com" color={"red"} text="link3"/>
                    </>
                </BrowserRouter>
                
            </section>
        );
    }
}

export default HomePage