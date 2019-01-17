import React, {Component} from 'react';
import styled from 'styled-components';
import image from "./../../../img/cartoon.jpg";
import SectionWrapper from "./SectionWrapper";
import HowItWorksCard from '../../modules/HowItWorksCard';
import OrdList from '../../modules/HowItWorksList';

const H = styled.h1`
width: 100%;
text-align: center;
margin-top: 120px;
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
        cardHeading = "You Choose Your Cause" 
        cardText = {
        <div>
          <p> With over 50,000 charities in Australia, how do you make the right choice? </p> 
          <p> Our team of analysts determine the best charities that serve the cause of your choice. </p>
        </div>
        }
        CardImage = {image}
                />           
                <HowItWorksCard
        cardHeading = "We Invest Responsibly" 
        cardText = {
        <div>
          <p> We invest the donations in Australian equities to generate significantly greater returns.  </p> 
          <p> This provides meaningful annual distributions to high impact charities that serve your cause. </p>
        </div>
        }
        CardImage = {image}
                />     
                <HowItWorksCard
        cardHeading = "Charities Benefit Forever" 
        cardText = {
        <div>
          <p> The impact of a single donation is only temporary. </p> 
          <p> I4C runs with zero operational costs and donations are grown through investments given to high impact charities every year into the future. </p>
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
