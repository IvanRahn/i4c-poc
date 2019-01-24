import React, {Component} from "react";
import styled from "styled-components";
<<<<<<< HEAD
import HTMLContent from "./HTMLContent";
=======
import HTMLContent from "./../modules/HTMLContent"
>>>>>>> f1fbbe3e0cd2257e14ec7213257266bfecc88d79

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
height: 200px; 
width: 200px; 
/* max-width: 250px;  */
/* max-height: 250px; */
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
<<<<<<< HEAD
                        <HTMLContent content = {CardText} />
=======
                        <HTMLContent content={CardText}/>
>>>>>>> f1fbbe3e0cd2257e14ec7213257266bfecc88d79
                    </DivContainer>
                </CardWrapper>
            </div>
        )
    }
}

export default VolunteerCard;