import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import MoreI4cCard from "../../modules/MoreI4cCard";
import ButtonLink from "../../modules/ButtonLink";
import ImpactSection from './ImpactSection';
import HowItWorksCard from './../../modules/HowItWorksCard';
import image from './../../../img/cartoon.jpg';
import NavBar from './../../modules/NavBar';
import HowitWorksSection from './HowItWorksSection';
import FeaturedCauseSection from "./../../pages/HomePage/FeaturedCauseSection";
import MoreI4cSection from "./../../pages/HomePage/MoreI4cSection";
import Footer from "./../../modules/Footer";

class HomePage extends Component {
    
    render() {
        
        return (
            <section>
                <NavBar/>
                <ImpactSection />
                <HowitWorksSection color="green"/>
                <FeaturedCauseSection />
                <MoreI4cSection />
                <Footer />
                
            </section>
        );
    }
}

export default HomePage