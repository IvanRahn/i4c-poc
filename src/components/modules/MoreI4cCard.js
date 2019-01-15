import React, {Component} from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
overflow: hidden;
padding: 0 0 32px;
margin: 48px auto 0;
width: 250px;
border-style: solid;
border-radius: 10px;
`
const DivContainer = styled.div`
padding: 2px 16px;
`

const ImageContainer = styled.img`
height: auto; 
width: auto; 
max-width: 250px; 
max-height: 250px;
`
class MoreI4cCard extends Component {
    
    render(){

        const {CardHeading, CardText, CardImage} = this.props;

        return(
            <div>
                <CardWrapper>
                    <ImageContainer src= {CardImage} />
                    <DivContainer>
                        <h3>{CardHeading}</h3>
                        <p>{CardText}</p>
                    </DivContainer>
                </CardWrapper>
            </div>
        )
    }
}

export default MoreI4cCard;