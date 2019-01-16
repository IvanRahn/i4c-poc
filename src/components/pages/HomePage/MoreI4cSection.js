import React, {Component} from 'react';
import styled from 'styled-components';
import image from "./../../../img/cartoon.jpg";
import SectionWrapper from "./SectionWrapper";
import OrdList from '../../modules/HowItWorksList';
import MoreI4cCard from '../../modules/MoreI4cCard';

const FlexDiv = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-around;
`

class MoreI4cSection extends Component {
    render() {
        const {color} = this.props;
        return (
            <SectionWrapper color={color}>
                <FlexDiv>
                    <MoreI4cCard CardHeading="This is a heading" CardText="This is some text" CardImage={image}  />
                    <MoreI4cCard CardHeading="This is a heading" CardText="This is some text" CardImage={image}  />
                    <MoreI4cCard CardHeading="This is a heading" CardText="This is some text" CardImage={image}  />
                </FlexDiv>

            </SectionWrapper>
        )
    }
}

export default MoreI4cSection;
