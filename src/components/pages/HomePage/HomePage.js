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
                    <>
                    <CTASection 
                CTAText = "Our qualified team did the research, so you don't have to. The Australian charity sector holds over $30 billion dollars in cash reserves earning very low returns. A donation to I4C goes much further. Most charities rely on regular donations to sustain their programs. Join us to make an everlasting impact. Vetted by our Board of Trustees"
                  />
                   
                    <MoreI4cCard CardText = "This is some text" CardHeading = "This is a heading" CardImage = "http://writingexercises.co.uk/images2/randomimage/pipe-sculpture.jpg" />
                    
                    <Footer />
                    
                    </>
                </BrowserRouter>
                
            </section>
        );
    }
}

export default HomePage