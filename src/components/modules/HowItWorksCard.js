import React, { Component } from "react";  
import styled from "styled-components";
import VolunteerCard from './VolunteerCard';

const Li = styled.li` 
  margin: 0 0 0.5rem 0;
  padding: 32px;
  counter-increment: my-awesome-counter;
  position: relative;

`




class HowitWorksCard extends Component {
    render() { 
        const {cardHeading, cardText, CardImage } = this.props
        return (
                <Li>
                    <VolunteerCard CardHeading={cardHeading} CardText={cardText} CardImage={CardImage}/>
                </Li>
                           
        );
    }
}
 
export default HowitWorksCard;