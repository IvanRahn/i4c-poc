import React from 'react';
import FirstSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection';
import FourthSection from './sections/FourthSection';
import LastSection from './sections/LastSection';
import BrandSection from './sections/BrandSection'
import VolunteerSection from './sections/VolunteerSection';
import withTracker from '../../google_analytics/withTracker';


const AboutHomePage = (props) =>  {
        
        return (
            <>
            <FirstSection />
                <SecondSection />
                <BrandSection />
                <VolunteerSection />
                <FourthSection />
                <LastSection />
            </>
        );
    }




export default withTracker(AboutHomePage);