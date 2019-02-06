import React, {Component} from 'react';
import styled from 'styled-components';
import {OrdList, Card, Loading, SectionWithWave} from "..";
import { connect } from 'react-redux';
import {getContent} from '../../../actions';

const H = styled.h1`
margin: 0;
color: white;
margin-bottom: 32px;
@media only screen and (min-width: 960px){
margin-bottom: 88px;
}

`
class HowItWorksSection extends Component {
    componentDidMount() {
        this.props.getContent("how-it-works/donate")
    }
    render() {

        const {color, steps, stepsIsFetching, stepsError, cardCount} = this.props;
        if (stepsIsFetching) {
            return <Loading/>
        } else if (stepsError || !steps || !steps[0]) {
            return <div>error</div>
        }
        
        return (
            <>

            <SectionWithWave 
            padding="112px 24px"
            height="auto" 
            id="HowItWorks" 
            mobilePadding="72px 24px"
            color={color} >
            <H>Donate once, give forever</H>
                <OrdList>
                {steps.map((step, i) => {
                    if (i < cardCount) {
                        return (
                            <li key={step._id} >
                                <Card 
                                    CardText={step.text}
                                    CardImage={step.image ? step.image.secure_url : null}
                                    CardHeading={step.title}
                                />
                                
                            </li>
                        )
                        } else return null
                }) }
                </OrdList>
            </SectionWithWave>
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
