import React, {Component} from "react";
import styled from "styled-components";
import image from "./../../img/cartoon.jpg"
import {HTMLContent} from "./../modules"
import Link from "./Link"

const CardWrapper = styled.div`
overflow: hidden;
padding: 18px 12px;
background-color: #24c421;
border-radius: 4px;

@media only screen and (min-width: 500px) {
    display: flex;
    flex-direction: row-reverse;
    padding: 24px 12px;
    border-radius: 16px;
    width: 460px;
}
`
const DivContainer = styled.div`
    color: white;
    font-size: 24px;
    min-width: 150px;
    p {
        line-height: 1.5;
        font-size: 16px;
    }
    h3 {
        margin: 8px 0;
    }
`
const LinkWrapper = styled(Link) `
    width: 100%;
margin: 24px 0;

    :hover, :focus {
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    }
    @media only screen and (min-width: 500px) {
        width: auto;
    margin: 8px 20px;
    border-radius: 16px;

    }
`

const ImageContainer = styled.img`
height: 100px; 
max-width: 100px;
`
class FeaturedCauseCard extends Component {
    
    render(){

        const {CardHeading, CardText, CardImage, to} = this.props;

        return(
            
                <LinkWrapper to={to}>
                    <CardWrapper>
                        <ImageContainer src={CardImage || image} />
                        <DivContainer>
                            <h3>{CardHeading}</h3>
                            <HTMLContent content={CardText}/>
                        </DivContainer>
                    </CardWrapper>
                </LinkWrapper>

        )
    }
}

export default FeaturedCauseCard;