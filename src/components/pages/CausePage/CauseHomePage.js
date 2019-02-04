import React, {Component} from "react";
import { connect } from "react-redux";
import {getContent} from "./../../../actions"
import DonateSection from "./sections/DonateSection";
import OurDonorSection from "./sections/OurDonorSection";
import JoinSection from "./sections/JoinSection";
import {Loading} from '../../modules';
import FirstSection from '../CausePage/sections/FirstSection';


class causesHomePage extends Component {


    render () {
        const { content, isFetching, error} = this.props;
        console.log("this", content);

        return (
            <div>
                {/* <FirstSection /> */}
                {/* <OurDonorSection /> */}

                <JoinSection />
                {/* <DonateSection  color="green"/>
                <OurDonorSection />
                <JoinSection /> */}
            </div>
        );
    }
    
}



export default causesHomePage;