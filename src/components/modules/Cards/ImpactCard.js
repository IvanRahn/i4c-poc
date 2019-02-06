import React from "react";
import styled from "styled-components";
import { HTMLContent, Icon } from '..';

const CardWrapper = styled.div`
width: 100%;
grid-column: 1/span 2;
img {
    margin-right: 24px;
}
display: ${props => props.display === "desktop" ? "none" : "flex"};
margin-left: ${props => props.display ? "24px" : "0"};    
    @media only screen and (min-width: 768px) {
    margin-top: 24px;
    display: ${props => props.display === "mobile" ? "none" : "flex"}
    }
    h5 {
        text-align: left;
    }

`
const Card = ({image, heading, text, display}) => {
    return (
        <CardWrapper display={display}>
                <Icon 
                small 
                src={image} 
                alt=""/>
                <div>
                <h5>{heading}</h5>
                <HTMLContent content={text}/>
                </div>
            </CardWrapper>
    )
}
export default Card