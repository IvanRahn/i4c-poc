import React, {Component} from "react";
import { connect } from "react-redux";
import {getContent} from "./../../../actions"
import FirstSection from "./sections/FirstSection";
import DonateSection from "./sections/DonateSection";
import OurDonorSection from "./sections/OurDonorSection";
import JoinSection from "./sections/JoinSection";

class causesHomePage extends Component {
    
    componentDidMount() {
        this.props.getContent("causes")
        
    }

    render () {
        console.log(this.props.causes)
        if(this.props.causes) {
            return (
                <div>
                    <FirstSection />
                    <DonateSection  color="green"/>
                    <OurDonorSection />
                    <JoinSection />
                    

                    {/* {this.props.causes.map(causes => {
                        
                        return(
                        <InternalLink key={causes._id} to={`cause/${causes.slug}`} text={causes.title} />
                        )
                    })} */}

                </div>
            );
        } 
        
        return(
            <FirstSection />
        )
    }
    
}


const mapStateToProps = (state) => {
    console.log(state);
    const {causes, causesIsFetching, causesError} = state.cause
    return {
      causes,
      causesIsFetching,
      causesError
    }
  }

export default connect(mapStateToProps, {getContent})(causesHomePage);