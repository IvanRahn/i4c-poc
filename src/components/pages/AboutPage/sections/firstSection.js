import React, {Component} from 'react';
import styled from 'styled-components';
import SectionWrapper from "./SectionWrapper";
import image from "./../../../img/cartoon.jpg"



class FirstSection extends Component {
    render () {
        
        return (
            <SectionWrapper color={color}>
                <p>First section</p>
            </SectionWrapper>
        )
    } 
}


export default FirstSection;
