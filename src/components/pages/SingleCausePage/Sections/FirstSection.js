import React, {Component} from 'react';
import {connect} from "react-redux";
import getContent from '../../../../actions/keystoneActions';
import withTracker from '../../../google_analytics/withTracker';
import { withRouter } from 'react-router-dom';
import PageOpener from '../../../modules/pageLayout/PageOpenerV2';
import CardSection from "../../../modules/pageLayout/CardSectionV2"
import {CauseCard, InternalLink} from "../../../modules";


const FirstSection = ({cause}) => {
        const impactList = Object.values(cause.impact)

        return ( 

<PageOpener 
           heading={cause.topSection.heading}
           image={cause.topSection.image.secure_url}
           text={cause.topSection.text}
           breadcrumbs={[
            {to: "/cause", text:"Causes we care about"}, 
            {to: "#", text: cause.title}
            
        ]}
            >
           <></>
           <CardSection content={impactList}/>


           </PageOpener>

         );
    }

export default FirstSection;
