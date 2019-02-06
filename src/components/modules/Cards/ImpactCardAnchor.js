import React, {Component} from "react";
import styled from "styled-components";
import {HTMLContent, LinkWrapper, Icon} from ".."
import {brightGreen} from "../BrandStyle"

const CardWrapper = styled.div`
overflow: hidden;
padding: 24px;
background-color: ${brightGreen};
border-radius: 8px;

@media only screen and (min-width: 500px) {
    display: flex;
    flex-direction: ${props => props.column ? "column" : "row-reverse"};
    width: 400px;
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
                            <HTMLContent content={CardText}/>
                            {children}
                        </DivContainer>
                    </CardWrapper>
                </LinkWrapper>

        )
    }
}

export default FeaturedCauseCard;