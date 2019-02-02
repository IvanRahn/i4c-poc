import React, {Component} from "react";
import { connect } from "react-redux";
import {getContent} from "./../../../actions"
import DonateSection from "./sections/DonateSection";
import OurDonorSection from "./sections/OurDonorSection";
import JoinSection from "./sections/JoinSection";
import PageOpener from "../../modules/pageLayout/PageOpener";
import {Loading} from '../../modules';


class causesHomePage extends Component {
    
    componentDidMount() {
        this.props.getContent("causes/homepage")
        
    }

    render () {
        const { content, isFetching, error} = this.props;
        console.log("this", content);
        if(content) {
            return (
                <div>
                    <PageOpener text={content[0].firstText} image={content[0].image.secure_url} heading={content[0].firstHeading} link="yo" horizontalCardApi="causes/homepage-card" horizontalCardState="causeHomeCard" />
                    <DonateSection  color="green"/>
                    <OurDonorSection />
                    <JoinSection />
                </div>
            );
        } 
        
        return(
            <Loading />
        )
    }
    
}


const mapStateToProps = (state) => {
    const {content, isFetching, error} = state.causeHomePageFirstSection
    return {
        content,
        isFetching,
        error,
    }
  }

export default connect(mapStateToProps, {getContent})(causesHomePage);