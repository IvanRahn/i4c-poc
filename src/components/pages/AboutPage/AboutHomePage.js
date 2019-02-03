import React from 'react';
import FirstSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection';
import FourthSection from './sections/FourthSection';
import CenteredContent from '../../modules/CenteredContent';
import VolunteerSection from './sections/VolunteerSection';
import withTracker from '../../google_analytics/withTracker';
import { withRouter } from 'react-router-dom';


const AboutHomePage = (props) =>  {
        
        return (
            <div>
                <FirstSection />
                <SecondSection />
                <VolunteerSection />
                <FourthSection />
                <CenteredContent />
            </div>
        );
    }




export default withTracker(withRouter(AboutHomePage));