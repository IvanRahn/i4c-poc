import React, {Component} from "react";
import styled from "styled-components";
import image from "./../../img/cartoon.jpg"

const CardWrapper = styled.div`
overflow: hidden;
padding: 20px;
width: 460px;
height: 160px;
background-color: #24c421;
border-radius: 10px;
display: flex;
margin: -200px 40px;
align-self: top;
`
const DivContainer = styled.div`
padding: 2px 16px;
color: white;
`

const ImageContainer = styled.img`
height: auto; 
width: auto; 
max-width: 250px; 
max-height: 250px;
`
class FeaturedCauseCard extends Component {
    
    render(){

        const {CardHeading, CardText, CardImage} = this.props;

        return(
            <div>
                <CardWrapper>
                    <DivContainer>
                        <h3>{CardHeading}</h3>
                        <p>{CardText}</p>
                    </DivContainer>
                    <ImageContainer src={CardImage || image} />
                </CardWrapper>
            </div>
        )
    }
}

export default FeaturedCauseCard;