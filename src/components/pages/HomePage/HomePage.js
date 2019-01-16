import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import MoreI4cCard from "../../modules/MoreI4cCard";
import ButtonLink from "../../modules/ButtonLink";
import ImpactSection from './ImpactSection';
import HowItWorksCard from './../../modules/HowItWorksCard';
import image from './../../../img/cartoon.jpg';
import NavBar from './../../modules/NavBar';
import FeaturedCauseCard from '../../modules/FeaturedCauseCard';
import HowitWorksSection from './HowItWorksSection';;
class HomePage extends Component {
    
    render() {
        
        return (
            <section>
                <NavBar/>
                <ImpactSection />
                <HowitWorksSection color="green"/>
                
                <BrowserRouter>
                    <>
                    <FeaturedCauseCard CardText = "This is some text" CardHeading = "This is a featured cause card" CardImage = {image} />
                    <MoreI4cCard CardText = "This is some text" CardHeading = "This is a heading" CardImage = {image} />
                    <ButtonLink href="#" text={"link"} {...this.props} section={"The only section"}/>
                    <ButtonLink auto href="google.com" color={"green"} text="link2"/>
                    <ButtonLink href="react.com" color={"red"} text="link3"/>
                    <MoreI4cCard CardText = "This is some text" CardHeading = "This is a heading" CardImage = "http://writingexercises.co.uk/images2/randomimage/pipe-sculpture.jpg" />
                    <MoreI4cCard CardText = "This is some text" CardHeading = "This is a heading" CardImage = "http://writingexercises.co.uk/images2/randomimage/pipe-sculpture.jpg" />

                    </>
                </BrowserRouter>
                
            </section>
        );
    }
}

export default HomePage