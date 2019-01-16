import React, {Component} from 'react';
import styled from 'styled-components';
import image from "./../../../img/cartoon.jpg";
import SectionWrapper from "./SectionWrapper";
import MoreI4cCard from '../../modules/MoreI4cCard';

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
                    <MoreI4cCard CardHeading="This is a heading" CardText="This is some text" CardImage={image}  />
                    <MoreI4cCard CardHeading="This is a heading" CardText="This is some text" CardImage={image}  />
                    <MoreI4cCard CardHeading="This is a heading" CardText="This is some text" CardImage={image}  />

            </SectionWrapper>
        )
    }
}

export default MoreI4cSection;
