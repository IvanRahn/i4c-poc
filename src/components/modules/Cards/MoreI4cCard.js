import React, {Component} from "react";
import styled from "styled-components";
import {LinkWrapper} from './../';


const CardWrapper = styled.div`
overflow: hidden;
width: 300px;
background-color: white;
border-radius: 10px;
width: 360px;
h3 {
    text-align: left;
}

@media only screen and (min-width: 500px) {
    overflow: hidden;
    padding: 0 0 32px;
    background-color: white;
    border-radius: 10px;
}
`
const DivContainer = styled.div`
padding: 2px 16px;
`

const ImageContainer = styled.img`
height: 120px; 
width: 300px; 
@media only screen and (min-width: 500px) {
    height: 220px; 
    width: 100%; 
}
`
class MoreI4cCard extends Component {
    
    render(){

        const {CardHeading, CardText, CardImage} = this.props;

        return(
            <LinkWrapper>
                <CardWrapper>
                    <ImageContainer src= {CardImage} alt="" />
                    <DivContainer>
                        <h3>{CardHeading}</h3>
                        <p>{CardText}</p>
                    </DivContainer>
                </CardWrapper>
            </LinkWrapper>
        )
    }
}

export default MoreI4cCard;