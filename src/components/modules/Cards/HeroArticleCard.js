import React  from "react";
import styled from "styled-components";
import {HTMLContent} from ".."

const CardWrapper = styled.div`
display: flex;
flex-direction: column;
overflow: hidden;
padding: 0 0 32px;
margin: 48px auto 0;
width: 100%;
margin: 0px 24px;

@media only screen and (min-width: 500px) {
    display: flex;
    flex-direction: row;
    overflow: hidden;
    padding: 0 0 32px;
    margin: 48px auto 0;
    width: 100%;
    margin: 0px 24px;
 }
`
const DivContainer = styled.div`
width: 100%;
padding: 2px 20px;

@media only screen and (min-width: 500px) {
    width: 50%;
    padding: 40px 80px 0px 0px;
 }
`
const DivImageContainer = styled.div`
width: 100%;
padding: 2px 16px;
display: flex;
justify-content: center;
align-items: center;

@media only screen and (min-width: 500px) {
    width: 50%;
    padding: 2px 16px;
 }
`

const ImageContainer = styled.img`
height: 270px; 
width: 270px; 
border-radius: 100%;

@media only screen and (min-width: 500px) {
    height: 436px; 
    width: 436px; 
    border-radius: 100%;
 }
`
const HorizontalCard = ({className, heading, subHeading, text, image, children}) => {
    
        return(
            <CardWrapper className={className}>
                <DivImageContainer>
                    <ImageContainer  src= {image} />
                </DivImageContainer>
                <DivContainer>
                    <h3>{heading}</h3>
                    <h4>{subHeading}</h4>
                <HTMLContent content= {text} />
                {children}
                </DivContainer>
            </CardWrapper>

        )
}

export default HorizontalCard;