import React, {Component} from 'react';
import styled from 'styled-components';
import SectionWrapper from "./../../modules/SectionWrapperV2";
import OrdList from '../../modules/HowItWorksList';
import VolunteerCard from '../../modules/VolunteerCard';
import { connect } from 'react-redux';
import getContent from '../../../actions/keystoneActions';

const H = styled.h1`
width: 100%;
text-align: center;
margin-top: 120px;
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
            <SectionWrapper color={color} height="auto">
            <H>Donate once, give forever</H>
                <OrdList>
                {steps.map((step, i) => {
                    if (i < 3) {
                        return (
                            <li key={step._id} >
                                <VolunteerCard 
                                CardText={step.Content.text}
                                CardImage={step.Image ? step.Image.secure_url : null}
                                CardHeading={step.title}
                                />
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
