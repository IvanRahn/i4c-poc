import React, {Component} from 'react';
import styled from 'styled-components';
import image from "./../../../img/cartoon.jpg";
import SectionWrapper from "./../HomePage/SectionWrapper";
import FeaturedCauseCard from '../../modules/FeaturedCauseCard';
import ButtonLink from './../../modules/ButtonLink';

const H = styled.h1`
    width:100%;
    text-align: center;
`

class FeacturedCauseSection extends Component {
    render() {
        const {color} = this.props;
        return (
            <SectionWrapper color={color}>
                <H>Featured Causes</H>
                <FeaturedCauseCard CardHeading="This is a heading" CardText="This is some text" CardImage={image}  />
                <FeaturedCauseCard CardHeading="This is a heading" CardText="This is some text" CardImage={image}  />    
                <ButtonLink />
            </SectionWrapper>
        )
    }
}

export default FeacturedCauseSection;
