import React, {Component} from 'react';
import styled from 'styled-components';
import image from "./../../../img/cartoon.jpg";
import SectionWrapper from "./SectionWrapper";
import OrdList from '../../modules/HowItWorksList';
import MoreI4cCard from '../../modules/MoreI4cCard';


class MoreI4cSection extends Component {
    render() {
        const {color} = this.props;
        return (
    
            <SectionWrapper color={color}>
                <h2>More I4C</h2>
                <OrdList>
                    <MoreI4cCard CardHeading="This is a heading" CardText="This is some text" CardImage={image}  />
                    <MoreI4cCard CardHeading="This is a heading" CardText="This is some text" CardImage={image}  />    
                </OrdList>
            </SectionWrapper>
        )
    }
}

export default MoreI4cSection;
