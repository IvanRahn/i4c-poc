import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, Breadcrumb, Link} from './../../modules';
import CardSection from './CardSection';
import VerticalCardSection from './VerticalCardSection';


const ImageContainer = styled.img`
width: 100%;
height: auto; 
position: relative;
top: 0;

@media (min-width: 500px){
    width: 670px;
    height: 500px; 
    position: relative;
    top: 0;
}
`
const Section = styled.div `
width: ${props => props.width || "100%"};
@media (min-width: 768px){
    width: 50%;
    height: ${props => props.height || "auto"};
}
`
const Wrapper = styled.div`
text-align: left;
padding: 48px;

@media (min-width: 768px){
    margin-top: 200px;
}
`
const P = styled.p`
margin-bottom: ${props => props.margin || "0px"};

`
const BorderPMobile= styled.p`
color: white;
background-color: green;

@media (min-width: 500px){
    display: none;
}
`

const BorderP = styled.p`
display: none;

@media (min-width: 500px){
    display: block;
    color: white;
    background-color: green;
}

`

class PageOpener extends Component {

    render () {
        const { color, image, heading, text, link, horizontalCardApi, horizontalCardState, verticalCardApi, verticalCardState } = this.props;        
        
        return (
            <>
            <SectionWrapper color={color} height= "auto" padding="0">
                <Section height="100%">
                    <BorderPMobile>
                        <Breadcrumb>
                            {link}
                        </Breadcrumb>    
                    </BorderPMobile>
                    <ImageContainer src= {image} alt="Cherring man" />
                    <VerticalCardSection 
                    verticalCardApi={verticalCardApi} 
                    verticalCardState={verticalCardState}  /> 
 
                </Section>

                <Section>
                    <Wrapper>
                        <BorderP>{link}</BorderP>
                        <h1>{heading}</h1> 
                        <P margin="70px">{text}</P>
                    </Wrapper>               
                </Section>
            </SectionWrapper>
            <CardSection 
            horizontalCardApi={horizontalCardApi} 
            horizontalCardState={horizontalCardState} />
            </>

            
        
        )
    } 
}

export default PageOpener

