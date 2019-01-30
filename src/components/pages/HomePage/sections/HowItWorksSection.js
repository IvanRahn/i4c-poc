import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, OrdList, Card, InternalLink} from "../../../modules";
import { connect } from 'react-redux';
import getContent from '../../../../actions/keystoneActions';

const H = styled.h1`
margin: 0;
color: white;
`
class HowItWorksSection extends Component {
    componentDidMount() {
        this.props.getContent("HOWITWORKSSTEPS")
    }
    render() {

        const {color, steps, stepsIsFetching, stepsError} = this.props;
        if (stepsIsFetching) {
            return <div>Loading</div>
        } else if (stepsError || !steps || !steps[0]) {
            return <div>error</div>
        }
        
        return (
            <>

            <SectionWrapper height="auto" id="HowItWorks" color={color} >
            <H>Donate once, give forever</H>
                <OrdList>
                {steps.map((step, i) => {
                    if (i < 3) {
                        return (
                            <li key={step._id} >
                                <Card 
                                CardText={step.Content.text}
                                CardImage={step.Image ? step.Image.secure_url : null}
                                CardHeading={step.title}
                                />
                                <InternalLink to="/" text="placeholder" color="white"/>
                            </li>
                        )
                        } else return null
                }) }
                </OrdList>
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
})(HowItWorksSection);
