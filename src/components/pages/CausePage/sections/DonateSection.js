import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, Loading, Card} from "../../../modules";
import { connect } from 'react-redux';
import getContent from '../../../../actions/keystoneActions';
import image from '../../../../img/placeholder_circle_profile_520x520.jpg';

const H = styled.h1`
width: 100%;
text-align: center;
`
class DonateSection extends Component {
    componentDidMount() {
        this.props.getContent("causes/homepage-card")
    }
    render() {

        const {color, content, isFetching, error} = this.props;        
        if (isFetching) {
            return (<Loading/>)
            } else if (error || !content || !content[0]){
                return <div>error</div>
            }
        
        
        return (
            <>

            <SectionWrapper id="HowItWorks" color={color} height="auto" padding="52px 24px 52px" >
                <H>Donate once, give forever</H>
                <Card CardHeading="This is a heading" CardText="This is some text" CardImage={image}/>
            </SectionWrapper>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    const {content, isFetching, error} = state.aboutFirst
    return {
        content,
        isFetching,
        error,
    }
}
export default connect(mapStateToProps, {
    getContent
})(DonateSection);
