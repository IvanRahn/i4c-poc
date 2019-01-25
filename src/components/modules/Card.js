import React, {Component} from "react";
import styled from "styled-components";
import {HTMLContent} from "./index"

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
height: 200px; 
width: 200px; 
/* max-width: 250px;  */
/* max-height: 250px; */
border-radius: 100%;
`
class VolunteerCard extends Component {
    
    render(){

        const {CardHeading, CardText, CardImage} = this.props;

        return(
            <div>
                <CardWrapper>
                    <ImageContainer src= {CardImage} />
                    <DivContainer>
                        <h3>{CardHeading}</h3>
                        <HTMLContent content={CardText}/>
                    </DivContainer>
                </CardWrapper>
            </div>
        )
    }
}

export default VolunteerCard;