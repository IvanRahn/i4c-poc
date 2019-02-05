import React from "react";
import styled from "styled-components";
import { HTMLContent } from '..';

const CardWrapper = styled.div`
width: 100%;
grid-column: 1/span 2;
display: ${props => props.display === "desktop" ? "none" : "flex"};
margin-left: ${props => props.display ? "24px" : "0"};    
    @media only screen and (min-width: 768px) {
    display: ${props => props.display === "mobile" ? "none" : "flex"}
    }
img {
        width: 48px;
        height: 48px;
        margin-right: 24px;
    }
`
const Card = ({image, heading, text, display}) => {
    return (
        <CardWrapper display={display}>
                <img src={image} alt=""/>
                <div>
                <h5>{heading}</h5>
                <HTMLContent content={text}/>
                </div>
            </CardWrapper>
    )
}
export default Card