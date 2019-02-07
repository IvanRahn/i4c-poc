import React, {Component} from "react";
import DonateSection from "./sections/DonateSection";
import OurDonorSection from "./sections/OurDonorSection";
import JoinSection from "./sections/JoinSection";
import FirstSection from '../CausePage/sections/FirstSection';

class causesHomePage extends Component {


    render () {

        return (
            <div>
                <FirstSection />
                <DonateSection  color="green"/>
                <OurDonorSection />
                <JoinSection />
                
            </div>
        );
    }
    
}



export default causesHomePage;