import React, {Component} from "react";
import styled from "styled-components";
import {HTMLContent} from "../index"

const CardWrapper = styled.div`
grid-column: auto;
overflow: hidden;
width: 100%;
display: flex;
flex-direction: column;
padding-right: 12px;
@media only screen and (min-width: 500px) {
    align-items: flex-start;
    max-width: 250px;
}
h5 {
    margin: 24px 0;
    text-align: left;
    @media only screen and (min-width: 500px) {
        text-align: center;
    }
}
p {
    margin-bottom: 12px;
}
`

const ImageContainer = styled.img`
height: 118px; 
width: 118px; 
border-radius: 100%;
/* align-self: ${props => props.position || "flex-end"}; */

@media only screen and (min-width: 500px) {
    align-self: inherit;
}
`
class VolunteerCard extends Component {
    
    render(){

        const {CardHeading, CardText, CardImage} = this.props;

        return(
            // <div>
                <CardWrapper display={this.props.display}>
                    <ImageContainer src= {CardImage} alt="" />
                        <h5>{CardHeading}</h5>
                        <HTMLContent content={CardText}/>
                </CardWrapper>
            // </div>
        )
    }
}

export default VolunteerCard;