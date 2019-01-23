import React, {Component, lazy} from "react";
import NavBar from '../../modules/NavBar';
import FirstSection from "./sections/firstSection";
import SecondSection from "./sections/secondSection";
import ThirdSection from "./sections/thirdSection";
import Footer from "./../../modules/Footer"

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
                <Footer />
            </div>
        );
    }
    
}




export default AboutHomePage;