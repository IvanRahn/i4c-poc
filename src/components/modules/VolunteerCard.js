import React, {Component} from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
overflow: hidden;
padding: 0 0 32px;
margin: 48px auto 0;
width: 250px;
margin: 0px 24px;
display: ${props => props.display || "block"};
`
const DivContainer = styled.div`
padding: 2px 16px;
`

const ImageContainer = styled.img`
height: auto; 
width: auto; 
max-width: 100px; 
max-height: 100px;
border-radius: 100%;
`
class VolunteerCard extends Component {
    
    render(){

        const {CardHeading, CardText, CardImage} = this.props;

        return(
            <div>
                <CardWrapper display={this.props.display}>
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

export default VolunteerCard;