import React, {Component} from 'react';
import styled from 'styled-components';
import SectionWrapper from "./SectionWrapper";
import image from "./../../../img/cartoon.jpg"



class SecondSection extends Component {
    render () {
        
        return (
            <SectionWrapper color={color}>
                <p>second Page</p>
            </SectionWrapper>
        )
    } 
}


export default SecondSection;
