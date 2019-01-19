import React, {Component} from 'react';
import styled from 'styled-components';
import SectionWrapper from "./../HomePage/SectionWrapper";
import FeaturedCauseCard from '../../modules/FeaturedCauseCard';
import { connect } from 'react-redux';
import { getContent } from '../../../actions';


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
                        <FeaturedCauseCard 
                        key={content._id}
                        CardHeading={content.content.heading} 
                        CardText={content.content.text} 
                        CardImage={content.image.secure_url}  
                        />
                        )
                    }
                })
                }
            </SectionWrapper>
        )
    }   else if (error) {
        return (<div> Sorry, something went wrong </div>)
    }
        return (
            <div>loading</div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        content: state.content.content,
        isFetching: state.content.isFetching,
        error: state.content.error
    }
}

export default connect(mapStateToProps, {
    getContent
})(FeacturedCauseSection);
