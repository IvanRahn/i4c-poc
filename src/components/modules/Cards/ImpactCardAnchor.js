import React, {Component} from "react";
import styled from "styled-components";
import {HTMLContent,  Icon} from ".."
import Link from "./../LinksAndButtons/Link"
import {brightGreen, darkGreen} from "../BrandStyle"
const CardWrapper = styled.div`
overflow: hidden;
padding: 24px;
background-color: ${brightGreen};
border-radius: 8px;

@media only screen and (min-width: 500px) {
    display: flex;
    flex-direction: ${props => props.column ? "column" : "row-reverse"};
    /* width: 400px; */
}
`
const LinkWrapper = styled(Link)`
grid-column: span 12;
width: auto;
margin: 24px 0;
:hover, :focus {
    > div {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: ${props => props.color ? darkGreen : "none"};
    }
}
@media only screen and (min-width: 500px) {
    margin: 8px 20px;
    border-radius: 16px;
    /* grid-column: .5fr;
    grid-area: content; */

}
`
const DivContainer = styled.div`
    color: white;
    font-size: 24px;
    min-width: 120px;
  
    h3 {
        margin-bottom: 16px;
        text-align: left;
        @media only screen and (min-width: 500px) {
            
            margin-bottom: 24px;
        }

    }
`

class FeaturedCauseCard extends Component {
    
    render(){

        const {CardHeading, CardText, CardImage, to, children} = this.props;

        return(
            
                <LinkWrapper color to={to}>
                    <CardWrapper>
                        <Icon
                         big
                         src={CardImage || ""} />
                        <DivContainer>
                            <h3>{CardHeading}</h3>
                            <HTMLContent 
                            notClickable
                            content={CardText}/>
                            {children}
                        </DivContainer>
                    </CardWrapper>
                </LinkWrapper>

        )
    }
}

export default FeaturedCauseCard;