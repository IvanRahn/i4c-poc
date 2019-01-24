import React, {Component} from 'react';
import styled from 'styled-components';
import SectionWrapper from '../../../modules/SectionWrapperV2';
import image from '../../../../img/handshake.jpg';
import VolunteerCard from '../../../modules/VolunteerCard';

const Section = styled.div `
width: ${props => props.width || "50%"};
text-align: ${props => props.align || "center"};
height: 100%;
/* Add media query to make width 100% for mobile */
`
const H = styled.h1`
    width:100%;
    text-align: center;
`

class VolunteerSection extends Component {
    render() {
        const {color} = this.props;
        return (
           <SectionWrapper height="auto">
                <H>Now we have volunteers</H>
                <VolunteerCard CardHeading="Volunteer group." CardText="A little but about what they do. Lorem Ipsum is simply dummy text of the printing and typesetting industry." CardImage={image} />
                <VolunteerCard CardHeading="Volunteer group." CardText="A little but about what they do. Lorem Ipsum is simply dummy text of the printing and typesetting industry." CardImage={image} />
                <VolunteerCard CardHeading="Volunteer group." CardText="A little but about what they do. Lorem Ipsum is simply dummy text of the printing and typesetting industry." CardImage={image} />
                <VolunteerCard CardHeading="Volunteer group." CardText="A little but about what they do. Lorem Ipsum is simply dummy text of the printing and typesetting industry." CardImage={image} />
        
           </SectionWrapper>
        )
    }
}

export default VolunteerSection;
