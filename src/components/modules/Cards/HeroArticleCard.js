import React  from "react";
import styled from "styled-components";
import {HTMLContent} from ".."
import {brandBlack, brandWhite} from "./../"

const CardWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
margin: 36px 0 24px;

color: ${props => props.white ? brandWhite : brandBlack};
@media only screen and (min-width: 500px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
 }
`
const DivContainer = styled.div`
width: 100%;
color: ${brandWhite};
padding-left: 24px;
h3 {
    margin: 24px 0;
}
h4 {
    margin: 24px 0;
}
@media only screen and (min-width: 500px) {
    width: 50%;
 }
`

const ImageContainer = styled.img`
width: 100%;
height: 100%;
border-radius: 100%;
max-width: ${props => props.big ? "270px" : "160px"}; 
max-height: ${props => props.big ? "270px" : "160px"}; 
@media only screen and (min-width: 500px) {

max-width: ${props => props.big ? "436px" : "270px"}; 
max-height: ${props => props.big ? "436px" : "270px"}; 
width: 50%;
 }
`
const HorizontalCard = ({className, CardHeading, CardText, CardImage, CardName, children, white, big}) => {
    
        return(
            <CardWrapper white={white} className={className}>
                    <ImageContainer big={big} src= {CardImage} />
                <DivContainer>
                    <h3>{CardName}</h3>
                    <h4>{CardHeading}  </h4>
                <HTMLContent content= {CardText} />
                </DivContainer>
            </CardWrapper>

        )
}

export default HorizontalCard;