import React, {Component} from "react";
import { connect } from "react-redux";
import {getContent} from "./../../../actions"
import {InternalLink} from "./../../modules";
import FirstSection from "./sections/FirstSection";
import DonateSection from "./sections/DonateSection";
import OurDonorSection from "./sections/OurDonorSection";
import JoinSection from "./sections/JoinSection";
import PageOpener from "../../modules/pageLayout/PageOpener";
import image from '../../../img/placeholder_circle_profile_520x520.jpg';


class causesHomePage extends Component {
    
    componentDidMount() {
        this.props.getContent("causes")
        
    }

    render () {
        console.log(this.props.causes)
        if(this.props.causes) {
            return (
                <div>
                    {/* <FirstSection /> */}
                    <PageOpener text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." image={image} heading="Blah" link="yo" />
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