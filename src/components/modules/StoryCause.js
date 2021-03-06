import React from "react";
import styled from "styled-components";
import {HTMLContent} from "./index"

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
height: 250px; 
width: 250px; 
border-radius: 100%;
margin: 12px auto 25px;

@media only screen and (min-width: 500px) {
    height: 400px; 
    width: 400px; 
    border-radius: 100%;
 }
`
const StoryCause = ({className, CardHeading, CardText, CardImage, CardName}) => {
    
        return(
            <CardWrapper className={className}>
                <DivImageContainer>
                    <ImageContainer  src= {CardImage} />
                </DivImageContainer>
                <DivContainer>
                    <p>{CardName}</p>
                    <h2>{CardHeading}</h2>
                <HTMLContent content= {CardText} />
                
                </DivContainer>
            </CardWrapper>

        )
}

export default StoryCause;