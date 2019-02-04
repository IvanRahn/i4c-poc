import React from 'react';
import FirstSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection';
import FourthSection from './sections/FourthSection';
import LastSection from './sections/LastSection';
import BrandSection from './sections/BrandSection'
import VolunteerSection from './sections/VolunteerSection';
import withTracker from '../../google_analytics/withTracker';
import { withRouter } from 'react-router-dom';


const AboutHomePage = (props) =>  {
        
        return (
            <div>
                <FirstSection />
                <SecondSection />
                <BrandSection />
                <VolunteerSection />
                <FourthSection />
                <LastSection />
            </div>
        );
    }




export default withTracker(withRouter(AboutHomePage));