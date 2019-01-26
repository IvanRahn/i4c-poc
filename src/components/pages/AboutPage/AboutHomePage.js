import React, {Component} from "react";
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";
import VolunteerSection from "./sections/VolunteerSection"
import withTracker from '../../google_analytics/withTracker';
class AboutHomePage extends Component {
    
    componentDidMount() {
        
    }

    render () {
        return (
            <div>
                <FirstSection />
                <SecondSection />
                <VolunteerSection />
                <ThirdSection />
                
            </div>
        );
    }
    
}




export default withTracker(AboutHomePage);