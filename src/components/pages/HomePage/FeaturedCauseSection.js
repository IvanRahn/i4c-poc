import React, {Component} from 'react';
import styled from 'styled-components';
import image from "./../../../img/cartoon.jpg";
import SectionWrapper from "./SectionWrapper";
import OrdList from '../../modules/HowItWorksList';
import FeaturedCauseCard from '../../modules/FeaturedCauseCard';


class FeacturedCauseSection extends Component {
    render() {
        const {color} = this.props;
        return (
    
            <SectionWrapper color={color}>
                <h2>Featured Causes</h2>
                <OrdList>
                    <FeaturedCauseCard CardHeading="This is a heading" CardText="This is some text" CardImage={image}  />
                    <FeaturedCauseCard CardHeading="This is a heading" CardText="This is some text" CardImage={image}  />    
                </OrdList>
            </SectionWrapper>
        )
    }
}

export default FeacturedCauseSection;
