import React, {Component} from 'react';
import {connect} from "react-redux";
import getContent from '../../../../actions/keystoneActions';
import withTracker from '../../../google_analytics/withTracker';
import { withRouter } from 'react-router-dom';
import {PageOpener, CardSection, ErrorBoundary} from "../../../modules";


const FirstSection = ({cause}) => {
        const impactList = Object.values(cause.impact)
        console.log(cause.topSection)
        const information = [{heading: `<h1>${cause.topSection.heading}</h1>`, text: cause.topSection.text} ]
        return ( 
        <ErrorBoundary>
        <PageOpener 
            
           image={cause.topSection.image.secure_url}
           information={information}
           breadcrumbs={[
            {to: "/cause", text:"Causes we care about"}, 
            {to: "#", text: cause.title.name.adsfdasf} 
        ]}
            >
           <></>
           <CardSection content={impactList}/>


        </PageOpener>
        </ErrorBoundary>
         );
    }

export default FirstSection;
