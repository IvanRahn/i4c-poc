import React, {Component} from "react";
import styled from "styled-components";
import image from "./../../img/cartoon.jpg"
import {HTMLContent} from "./../modules"

const CardWrapper = styled.div`
overflow: hidden;
padding: 8px;
background-color: #24c421;
border-radius: 10px;
display: flex;
width: 100%;
height: 160px;
@media only screen and (min-width: 500px) {
    margin: 8px 40px;
    width: 460px;
    max-width: 80%;

}
`
const DivContainer = styled.div`
padding: 2px 16px;
color: white;
min-width: 150px;
`

const ImageContainer = styled.img`
height: auto; 
width: auto; 
max-width: 200px; 
max-height: 250px;
`
class FeaturedCauseCard extends Component {
    
    render(){

        const {CardHeading, CardText, CardImage} = this.props;

        return(
            // <div>
                <CardWrapper>
                    <DivContainer>
                        <h3>{CardHeading}</h3>
                        <HTMLContent content={CardText}/>
                    </DivContainer>
                    <ImageContainer src={CardImage || image} />
                </CardWrapper>
            // </div>
        )
    }
}

export default FeaturedCauseCard;