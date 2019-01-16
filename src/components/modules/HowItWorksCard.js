import React, { Component } from "react";  
import styled from "styled-components";


const Li = styled.li` 
  margin: 0 0 0.5rem 0;
  padding: 32px;
  counter-increment: my-awesome-counter;
  position: relative;

::before {
    content: counter(my-awesome-counter);
    color: white;
    font-size: 2.5rem;
    font-weight: bold;
    position: absolute;
    /* margin: auto; */
    --size: 50px;
    left: calc(-1 * var(--size) + 12px);
    /* line-height: var(--size); */
    width: var(--size);
    height: var(--size);
    top: 200px;
    background: transparent;
    border-radius: 50%;
    text-align: center;
    border-style: solid;
}
`

const ImageContainer = styled.img`
    display: flex;
    flex-direction: column;
    height: 150px;
    width: 150px;
    border-radius: 100%;
    margin: auto;
`


class HowitWorksCard extends Component {
    render() { 
        const {cardHeading, cardText, CardImage } = this.props
        return (
                <Li>
                    <div>
                    <ImageContainer src= {CardImage} />
                    <h1>{cardHeading}</h1> 
                    <h3>{cardText}</h3>
                    </div>
                </Li>
                           
        );
    }
}
 
export default HowitWorksCard;