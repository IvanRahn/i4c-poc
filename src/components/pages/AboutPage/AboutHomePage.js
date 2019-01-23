import React, {Component} from "react";
import NavBar from '../../modules/NavBar';
import FirstSection from "./sections/firstSection";
import SecondSection from "./sections/secondSection";
import ThirdSection from "./sections/thirdSection";

class AboutHomePage extends Component {
    
    componentDidMount() {
        
    }

    render () {
        return (
            <div>
                <NavBar />
                <FirstSection />
                <SecondSection />
                <ThirdSection />
            </div>
        );
    }
    
}




export default AboutHomePage;