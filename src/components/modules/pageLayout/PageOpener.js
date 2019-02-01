import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, Breadcrumb, Link} from './../../modules';
import CardSection from './CardSection';
import VerticalCardSection from './VerticalCardSection';

const SectionWrapper2 = styled(SectionWrapper)`
overflow: hidden;
position: relative;
min-height: 100vh;
`

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
const SectionLeft = styled.div `
width: ${props => props.width || "100%"};
@media (min-width: 768px){
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
`
const SectionRight = styled.div `
width: ${props => props.width || "100%"};
@media (min-width: 768px){
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
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
            <SectionWrapper2 color={color} height= "auto" padding="0">       
                <SectionLeft height="-webkit-fill-available">
                    
                    <Breadcrumb>
                        {link}
                    </Breadcrumb>    
                    <ImageContainer src= {image} alt="Cherring man" />
                    <VerticalCardSection verticalCardApi={verticalCardApi} verticalCardState={verticalCardState}  /> 
 
                </SectionLeft>

                <SectionRight>
                    <Wrapper>
                        <Breadcrumb><Link to="/google" text={link} /></Breadcrumb>
                        <h1>{heading}</h1> 
                        <P margin="70px">{text}</P>
                        {/* <h1>{heading}</h1> 
                        <P margin="70px">{text}</P>
                        <h1>{heading}</h1> 
                        <P margin="70px">{text}</P> */}
                    </Wrapper>               
                </SectionRight>
            </SectionWrapper2>
            <CardSection horizontalCardApi={horizontalCardApi} horizontalCardState={horizontalCardState} />
            </>

            
        
        )
    } 
}

export default PageOpener

