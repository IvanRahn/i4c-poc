import React, {Component} from 'react';
import styled from 'styled-components';
import image from "./../../../img/cartoon.jpg";
import SectionWrapper from "./SectionWrapper";
import OrdList from '../../modules/HowItWorksList';
import FeaturedCauseCard from '../../modules/FeaturedCauseCard';

const FlexDiv = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-around;
`


class FeacturedCauseSection extends Component {
    render() {
        const {color} = this.props;
        return (
    
            <SectionWrapper color={color}>
                <FlexDiv>
                    <FeaturedCauseCard CardHeading="This is a heading" CardText="This is some text" CardImage={image}  />
                    <FeaturedCauseCard CardHeading="This is a heading" CardText="This is some text" CardImage={image}  />    
                </FlexDiv>
            </SectionWrapper>
        )
    }
}

export default FeacturedCauseSection;
