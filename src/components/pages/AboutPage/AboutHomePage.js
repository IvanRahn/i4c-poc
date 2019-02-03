import React from 'react';
import FirstSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection';
import LastSection from './sections/LastSection';
import CenteredContent from '../../modules/CenteredContent';
import VolunteerSection from './sections/VolunteerSection';
import withTracker from '../../google_analytics/withTracker';
import { withRouter } from 'react-router-dom';


import HorizontalCard from '../../modules/HorizontalCard';

const AboutHomePage = (props) =>  {
    // componentDidMount() {
        
        // }
        
        console.log(props)
        return (
            <div>
                <FirstSection />
                <SecondSection />
                <VolunteerSection />
                <LastSection />
                <CenteredContent />
            </div>
        );
    }
// }




export default withTracker(withRouter(AboutHomePage));