import React, {Component} from 'react';
import {FeaturedCauseSection, HowItWorksSection} from './../../modules'; 
import {darkGreen} from "./../../modules/BrandStyle"
import FirstSection from './sections/FirstSection';
import StorySection from './sections/StorySection';


class HowItWorksHomePage extends Component {
   
    render() { 
      
        
            return ( 
                <> 
                    <FirstSection />
                    <HowItWorksSection cardCount={6} color={darkGreen}/>
                    <FeaturedCauseSection cardCount={3}>
                    <StorySection
                
                    />
                    </FeaturedCauseSection>                     
                </>
            );
    }
}
 


export default HowItWorksHomePage;

