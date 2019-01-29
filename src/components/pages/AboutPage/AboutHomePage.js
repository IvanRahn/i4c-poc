import React, {Component} from 'react';
import FirstSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection';
import ThirdSection from './sections/ThirdSection';
import CenteredContent from '../../modules';
import VolunteerSection from './sections/VolunteerSection'
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
                <ThirdSection />
                <CenteredContent />
                <div>
                    <HorizontalCard />
                </div>
            </div>
        );
    }
// }




export default withTracker(withRouter(AboutHomePage));