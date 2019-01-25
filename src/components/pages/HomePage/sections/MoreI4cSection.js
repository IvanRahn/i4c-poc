import React, {Component} from 'react';
import styled from 'styled-components';
import image from "./../../../../img/cartoon.jpg";
import SectionWrapper from "../../../modules/SectionWrapper";
import MoreI4cCard from '../../../modules/MoreI4cCard';
import VolunteerCard from '../../../modules/VolunteerCard';

const H = styled.h1`
    color: white;
    width:100%;
    text-align: center;
`

class MoreI4cSection extends Component {
    render() {
        const {color} = this.props;
        return (
            <SectionWrapper color={color}>
                <H>More from I4C</H>
                    <VolunteerCard CardHeading="This is a heading" CardText="This is some text" CardImage={image}  />
                    <VolunteerCard CardHeading="This is a heading" CardText="This is some text" CardImage={image}  />
                    <VolunteerCard CardHeading="This is a heading" CardText="This is some text" CardImage={image}  />

            </SectionWrapper>
        )
    }
}

export default MoreI4cSection;
