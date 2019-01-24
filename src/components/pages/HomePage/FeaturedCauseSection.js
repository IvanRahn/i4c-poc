import React, {Component} from 'react';
import styled from 'styled-components';
import SectionWrapper from "./../../modules/SectionWrapperV2";
import FeaturedCauseCard from '../../modules/FeaturedCauseCard';
import { connect } from 'react-redux';
import {getContent} from "./../../../actions";

const H = styled.h1`
    width:100%;
    text-align: center;
`



class FeacturedCauseSection extends Component {
    
    componentDidMount () {
        this.props.getContent("featured-cause-cards");
        
    }
    render() {
        const {color, content, isFetching, error} = this.props
        if (!isFetching && content) {
        return (
            <SectionWrapper color={color}>
                <H>Featured Causes</H>
                {content.map((content,i) => {
                    if (i <= 1) {
                        return (
                        <FeaturedCauseCard key={content._id}CardHeading={content.content.heading} CardText={content.content.text} CardImage={content.image?  content.image.secure_url : null}  />
                        )
                    }
                    return null
                })}
            </SectionWrapper>
        )
    } else if (error) {
        return <div>Error</div>
    }  
        return (
            <div>loading</div>
        )
    }
}
const mapStateToProps = (state) => {
    const {content, isFetching, error} = state.causes
    return {
        content,
        isFetching,
        error
    }
}

export default connect(mapStateToProps, {
    getContent
})(FeacturedCauseSection);
