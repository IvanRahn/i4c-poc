import React, {Component} from "react";
import styled from "styled-components";
import {HTMLContent} from "./index"
import image from "./../../img/placeholder_circle_profile_520x520.jpg"

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

@media only screen and (min-width: 500px) {
    height: 450px; 
    width: 450px; 
    border-radius: 100%;
 }
`
class HorizontalCard extends Component {
    
    render(){

        const {CardHeading, CardText, CardImage} = this.props;

        return(
            <CardWrapper>
                <DivImageContainer>
                    <ImageContainer src= {image} />
                </DivImageContainer>
                <DivContainer>
                    <h2>Surname</h2>
                    <h2>position</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </DivContainer>
            </CardWrapper>

        )
    }
}

export default HorizontalCard;