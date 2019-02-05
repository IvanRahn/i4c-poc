import React, {Component} from "react";
import styled from "styled-components";
import {HTMLContent, LinkWrapper} from ".."
import {brightGreen} from "../BrandStyle"
const CardWrapper = styled.div`
overflow: hidden;
padding: 18px 12px;
background-color: ${brightGreen};
border-radius: 4px;

@media only screen and (min-width: 500px) {
    display: flex;
    flex-direction: ${props => props.column ? "column" : "row-reverse"};
    padding: 24px 12px;
    border-radius: 16px;
    width: 400px;
}
`
const DivContainer = styled.div`
    color: white;
    font-size: 24px;
    min-width: 120px;
    p {
        line-height: 1.5;
        font-size: 16px;
    }
    h3 {
        margin: 8px 0;
    }
`


const ImageContainer = styled.img`
height: 100px; 
max-width: 100px;
`
class FeaturedCauseCard extends Component {
    
    render(){

        const {CardHeading, CardText, CardImage, to, children} = this.props;

        return(
            
                <LinkWrapper color to={to}>
                    <CardWrapper>
                        <ImageContainer src={CardImage || ""} />
                        <DivContainer>
                            <h3>{CardHeading}</h3>
                            <HTMLContent content={CardText}/>
                            {children}
                        </DivContainer>
                    </CardWrapper>
                </LinkWrapper>

        )
    }
}

export default FeaturedCauseCard;