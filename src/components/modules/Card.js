import React, {Component} from "react";
import styled from "styled-components";
import {HTMLContent} from "./index"

const CardWrapper = styled.div`
overflow: hidden;
/* padding: 0 0 32px; */
margin: 48px auto 0;
width: 100%;
display: flex;
flex-direction: column;
@media only screen and (min-width: 500px) {
    width: 250px;
}
h2 {
    margin: 24px 0;
}
p {
    margin-bottom: 12px;
}
`

const ImageContainer = styled.img`
height: 180px; 
width: 180px; 
border-radius: 100%;
align-self: ${props => props.position || "flex-end"};

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
                    <ImageContainer src= {CardImage} />
                    {/* <DivContainer> */}
                        <h2>{CardHeading}</h2>
                        <HTMLContent content={CardText}/>
                    {/* </DivContainer> */}
                </CardWrapper>
            // </div>
        )
    }
}

export default VolunteerCard;