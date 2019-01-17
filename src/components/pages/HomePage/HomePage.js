import React, { Component } from "react";
import ImpactSection from './ImpactSection';
import NavBar from './../../modules/NavBar';
import HowitWorksSection from './HowItWorksSection';
import FeaturedCauseSection from "./../../pages/HomePage/FeaturedCauseSection";
import MoreI4cSection from "./../../pages/HomePage/MoreI4cSection";
import Footer from "./../../modules/Footer";

class HomePage extends Component {
    
    render() {
        console.log(this.props)    
        return (
            <section>
                <NavBar/>
                <ImpactSection {...this.props}/>
                <HowitWorksSection color="green"/>
                <FeaturedCauseSection />
                <MoreI4cSection color="green" />
                <Footer />
                
            </section>
        );
    }
}

export default HomePage