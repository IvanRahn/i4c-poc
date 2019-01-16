import React, { Component } from "react";  
import styled from "styled-components";

const CardWrapper = styled.div`
overflow: hidden;
padding: 0 0 32px;
margin: 48px auto 0;
width: 400px;
border-style: solid;
border-radius: 5px;
background-color: green;
color: white;
`
const OrdList = styled.div`
padding: 2px 16px;
ol {
  max-width: 350px;
  counter-reset: my-awesome-counter;
  list-style: none;
  padding-left: 40px;
}
ol li {
  margin: 0 0 0.5rem 0;
  counter-increment: my-awesome-counter;
  position: relative;
}
ol li::before {
    content: counter(my-awesome-counter);
    color: white;
    font-size: 2.5rem;
    font-weight: bold;
    position: absolute;
    --size: 50px;
    left: calc(-1 * var(--size) - 10px);
    line-height: var(--size);
    width: var(--size);
    height: var(--size);
    top: 0;
    background: transparent;
    border-radius: 50%;
    text-align: center;
    border-style: solid;
}

body {
  background: #191919;
  color: #eee;
  font-family: Lato, sans-serif;
  line-height: 1.4;
  font-size: 90%;
  margin: 2rem;
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
            <div>
                <CardWrapper className="asf">
                <ImageContainer src= {CardImage} />
                    <OrdList>
                        <ol>
                            <li>
                                <h1>{cardHeading}</h1> 
                                <h3>{cardText}</h3>
                            </li>
                        </ol>
                    </OrdList>  
                </CardWrapper>   
            </div>  
        );
    }
}
 
export default HowitWorksCard;