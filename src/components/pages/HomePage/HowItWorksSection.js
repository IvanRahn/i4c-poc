import React, {Component} from 'react';
import styled from 'styled-components';
import image from "./../../../img/cartoon.jpg";
import SectionWrapper from "./SectionWrapper";
import HowItWorksCard from '../../modules/HowItWorksCard';

class HowitWorksSection extends Component {
    render() {
        const {color} = this.props;
        return (
            <SectionWrapper color={color}>
<HowItWorksCard
        cardHeading = "You choose your cause" 
        cardText = {
        <div>
          <p> With over 50,000 charities in Australia, how do you make the right choice? </p> 
          <p> Our team of analysts determine the best charities that serve the cause of your choice. </p>
        </div>
        }
        CardImage = {image}
        />            </SectionWrapper>
        )
    }
}

export default HowitWorksSection;
