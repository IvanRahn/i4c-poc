import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper} from "../../../modules";
import { connect } from 'react-redux';
import getContent from '../../../../actions/keystoneActions';
import Card from '../../../modules/MoreI4cCard';
import image from '../../../../img/placeholder_circle_profile_520x520.jpg';
import {Loading} from "./../../../modules"

const H = styled.h1`
width: 100%;
text-align: center;
/* margin-top: 120px; */
`
class DonateSection extends Component {
    componentDidMount() {
        this.props.getContent("HOWITWORKSSTEPS")
    }
    render() {

        const {color, steps, stepsIsFetching, stepsError} = this.props;
        if (stepsIsFetching) {
            return <Loading/>
        } else if (stepsError || !steps || !steps[0]) {
            return <div>error</div>
        }
        
        return (
            <>

            <SectionWrapper id="HowItWorks" color={color} height="auto" >
                <H>Donate once, give forever</H>
                <Card CardHeading="This is a heading" CardText="This is some text" CardImage={image}/>
                <Card CardHeading="This is a heading" CardText="This is some text" CardImage={image}/>
                <Card CardHeading="This is a heading" CardText="This is some text" CardImage={image}/>
                <Card CardHeading="This is a heading" CardText="This is some text" CardImage={image}/>
                <Card CardHeading="This is a heading" CardText="This is some text" CardImage={image}/>
                <Card CardHeading="This is a heading" CardText="This is some text" CardImage={image}/>
                <Card CardHeading="This is a heading" CardText="This is some text" CardImage={image}/>

                
            
            </SectionWrapper>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    const {steps, stepsIsFetching, stepsError} = state.steps
   return {
        steps: steps,
        stepsIsFetching: stepsIsFetching,
        stepsError: stepsError,
   }
}
export default connect(mapStateToProps, {
    getContent
})(DonateSection);
