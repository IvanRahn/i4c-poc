import React, {Component} from 'react';
import styled from 'styled-components';
import image from "./../../../img/cartoon.jpg";
import SectionWrapper from "./SectionWrapper";
import HowItWorksCard from '../../modules/HowItWorksCard';
import OrdList from '../../modules/HowItWorksList';

const H = styled.h1`
width: 100%;
text-align: center;
`
class HowitWorksSection extends Component {
    render() {
        const {color} = this.props;
        return (
            <>
            <SectionWrapper color={color}>
            <H>Donate once, give forever</H>
                <OrdList>
                <HowItWorksCard
        cardHeading = "You choose your cause" 
        cardText = {
        <div>
          <p> With over 50,000 charities in Australia, how do you make the right choice? </p> 
          <p> Our team of analysts determine the best charities that serve the cause of your choice. </p>
        </div>
        }
        CardImage = {image}
                />           
                <HowItWorksCard
        cardHeading = "You choose your cause" 
        cardText = {
        <div>
          <p> With over 50,000 charities in Australia, how do you make the right choice? </p> 
          <p> Our team of analysts determine the best charities that serve the cause of your choice. </p>
        </div>
        }
        CardImage = {image}
                />     
                <HowItWorksCard
        cardHeading = "You choose your cause" 
        cardText = {
        <div>
          <p> With over 50,000 charities in Australia, how do you make the right choice? </p> 
          <p> Our team of analysts determine the best charities that serve the cause of your choice. </p>
        </div>
        }
        CardImage = {image}
                />     
                </OrdList>
            </SectionWrapper>
            </>
        )
    }
}

export default HowitWorksSection;
