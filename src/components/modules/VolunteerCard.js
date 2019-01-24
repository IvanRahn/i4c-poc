import React, {Component} from "react";
import styled from "styled-components";
import HTMLContent from "./HTMLContent";

const Name = styled.h2`

`
const CardWrapper = styled.div`
overflow: hidden;
padding: 0 0 32px;
margin: 48px auto 0;
width: 250px;
margin: 0px 24px;
`
const DivContainer = styled.div`
padding: 2px 16px;
`

const ImageContainer = styled.img`
height: auto; 
width: auto; 
max-width: 250px; 
max-height: 250px;
border-radius: 100%;
`
class VolunteerCard extends Component {
    
    render(){

        const {CardHeading, CardText, CardImage, CardName, key} = this.props;

        return(
            <div>
                <CardWrapper>
                    <ImageContainer src= {CardImage} />
                    {key}
                    {CardName ? <Name>{CardName}</Name>  : null}
                    <DivContainer>
                        <h3>{CardHeading}</h3>
                        <HTMLContent content = {CardText} />
                    </DivContainer>
                </CardWrapper>
            </div>
        )
    }
}

export default VolunteerCard;