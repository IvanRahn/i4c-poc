import React, {Component} from "react";
import { connect } from "react-redux";
import {getContent} from "./../../../actions"
import DonateSection from "./sections/DonateSection";
import OurDonorSection from "./sections/OurDonorSection";
import JoinSection from "./sections/JoinSection";
import PageOpener from "../../modules/pageLayout/PageOpener";
import {Loading} from '../../modules';
import image from '../../../img/handshake.jpg'


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
                    <PageOpener text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." image={image} heading="Blah" link="yo" breadcrumbs={[{to: "/", text: "homepage"}]}horizontalCardApi="causes/homepage-card" horizontalCardState="causeHomeCard" />
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