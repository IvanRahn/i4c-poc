import React, {Component} from "react";
import styled from "styled-components";
import {HTMLContent} from "./index"

const Name = styled.h2`

`
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
h3 {
    margin: 24px 0;
}
`
const DivContainer = styled.div`
padding: 2px 16px;
`

const ImageContainer = styled.img`
height: 180px; 
width: 180px; 
/* max-width: 250px;  */
/* max-height: 250px; */
border-radius: 100%;
align-self: flex-end;
@media only screen and (min-width: 500px) {
    align-self: inherit;
}
`
class VolunteerCard extends Component {
    
    render(){

        const {CardHeading, CardText, CardImage, CardName} = this.props;

        return(
            // <div>
                <CardWrapper display={this.props.display}>
                    <ImageContainer src= {CardImage} />
                    {/* <DivContainer> */}
                        <h3>{CardHeading}</h3>
                        <HTMLContent content={CardText}/>
                    {/* </DivContainer> */}
                </CardWrapper>
            // </div>
        )
    }
}

export default VolunteerCard;