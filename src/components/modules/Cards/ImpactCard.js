import React from "react";
import styled from "styled-components";
import { HTMLContent } from '..';

const CardWrapper = styled.div`
display: flex;
width: 100%;
grid-column: 1/span 2;
img {
        width: 48px;
        height: 48px;
        margin-right: 24px;
    }
`
const Card = ({image, heading, text}) => {
    return (
        <CardWrapper>
                <img src={image} alt=""/>
                <div>
                <h5>{heading}</h5>
                <HTMLContent content={text}/>
                </div>
            </CardWrapper>
    )
}
export default Card