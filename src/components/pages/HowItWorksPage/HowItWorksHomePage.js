import React, {Component} from 'react';
import PageOpener from '../../modules/pageLayout/PageOpener'; 
import styled from 'styled-components';
import {SmallHorizontalCard, SectionWrapper, FeaturedCauseSection, HowItWorksSection, CauseCard, StoryCause} 
from './../../modules/'; 
import {connect} from "react-redux"; 
import {getContent} from "./../../../actions"
import {Loading} from "./../../modules"


class HowItWorksHomePage extends Component {
    componentDidMount() {

        this.props.getContent("storycause")
    }
    render() { 
        const {storycause, storycauseError, storycauseIsFetching} = this.props; 
		console.log("this one",storycause)
        if (storycauseIsFetching) {
            return <Loading/>

        } else if (storycauseError || !storycause|| !storycause[0]){
            return <div>error</div>
        }
        
            return ( 
                <> 
                    {/* <PageOpener/>  */}
                    <SmallHorizontalCard />
                    <HowItWorksSection color="green"/> 
                    <FeaturedCauseSection>
                    <StoryCause 
                    CardName={storycause[0].content.heading}
                    CardText={storycause[0].content.text} 
                    CardImage={storycause[0].image ? storycause[0].image.secure_url : null } 

                    />
                    </FeaturedCauseSection> 
                    

                

                </>
            );
    }
}
 
const mapStateToProps = (state) => {
    const {storycause, storycauseIsFetching, storycauseError} = state.storycause
    return {
        storycause, 
        storycauseIsFetching,
        storycauseError

    }
}

export default connect(mapStateToProps, {getContent})(HowItWorksHomePage);