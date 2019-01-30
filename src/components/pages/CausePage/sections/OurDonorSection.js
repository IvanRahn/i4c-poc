import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper} from "../../../modules";
import { connect } from 'react-redux';
import HorizontalCard from '../../../modules/HorizontalCard';
import getContent from '../../../../actions/keystoneActions';


const H = styled.h1`
width: 100%;
text-align: center;
/* margin-top: 120px; */
`
class OurDonorSection extends Component {
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
            <SectionWrapper height="auto">
                <H>Our Donors/ Charity Stories</H>

                <HorizontalCard />
            </SectionWrapper>
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
})(OurDonorSection);
