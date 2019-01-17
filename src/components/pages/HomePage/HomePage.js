import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import MoreI4cCard from "../../modules/MoreI4cCard";
import ButtonLink from "../../modules/ButtonLink";
import ImpactSection from './ImpactSection';
import HowItWorksCard from './../../modules/HowItWorksCard';
import image from './../../../img/cartoon.jpg';
import NavBar from './../../modules/NavBar';
import HowitWorksSection from './HowItWorksSection';
import FeaturedCauseCard from "./../../modules/FeaturedCauseCard";
import Footer from "./../../modules/Footer";
import CTASection from "./CTASection";

class HomePage extends Component {
    
    render() {
        
        return (
            <section>
                <NavBar/>
                <ImpactSection />
                <HowitWorksSection color="green"/>
                
                
                <BrowserRouter>
                    <div>

                    <CTASection
                        
                    CardImage = {image} />

                />
                    
                    <MoreI4cCard CardText = "This is some text" CardHeading = "This is a heading" CardImage = "http://writingexercises.co.uk/images2/randomimage/pipe-sculpture.jpg" />
                    
                    <Footer />
                    
                    </div>
                </BrowserRouter>
                
            </section>
        );
    }
}

export default HomePage