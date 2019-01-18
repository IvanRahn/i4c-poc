import React, {Component} from 'react';
import styled from 'styled-components';
import image from "./../../../img/cartoon.jpg";
import SectionWrapper from "./../HomePage/SectionWrapper";
import FeaturedCauseCard from '../../modules/FeaturedCauseCard';
import { connect } from 'react-redux';
import { getContent } from '../../../actions';


const H = styled.h1`
    width:100%;
    text-align: center;
`



class FeacturedCauseSection extends Component {
    // constructor (props) {
    //     super(props);
    // }
    render() {
        
        const {color} = this.props;
        return (
            <SectionWrapper color={color}>
                <H>Featured Causes</H>

                <FeaturedCauseCard CardHeading="This is a heading" CardText="This is some text" CardImage={image}  />
                <FeaturedCauseCard CardHeading="This is a heading" CardText="This is some text" CardImage={image}  />    
                

            </SectionWrapper>
        )
    }
}


export default FeacturedCauseSection;
