import React, {Component} from 'react';
import {FeaturedCauseSection, HowItWorksSection} from './../../modules'; 
import {darkGreen} from "./../../modules/BrandStyle"
import FirstSection from './sections/FirstSection';
import FeatureSection from './sections/FeatureSection';
import JoinSection from './sections/JoinSection';
import withTracker from "./../../google_analytics/withTracker"

class HowItWorksHomePage extends Component {
   
    render() { 
      
        
            return ( 
                <> 
                    <FirstSection /> 
                    <HowItWorksSection cardCount={6} color={darkGreen}/>
                    <FeaturedCauseSection cardCount={2}>
                    <FeatureSection/>
                    </FeaturedCauseSection>
                    <JoinSection />                     
                </>
            );
    }
}
 


export default withTracker(HowItWorksHomePage);

