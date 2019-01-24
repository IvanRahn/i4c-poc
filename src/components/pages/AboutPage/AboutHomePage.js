import React, {Component, lazy} from "react";
import FirstSection from "./sections/firstSection";
import SecondSection from "./sections/secondSection";
import ThirdSection from "./sections/thirdSection";
import VolunteerSection from "./sections/volunteerSection"

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




export default AboutHomePage;