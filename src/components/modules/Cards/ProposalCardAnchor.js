import React, {Component} from "react";
import styled from "styled-components";
import {HTMLContent, LinkWrapper, Icon} from ".."
import {brightGreen} from "../BrandStyle"
import image from "../../../img/cartoon.jpg"

const CardWrapper = styled.div`
overflow: hidden;

background-color: ${brightGreen};
    padding: 24px;
    border-radius: 16px;
    width: auto;
@media only screen and (min-width: 500px) {
}
`
const DivContainer = styled.div`
    color: white;
    /* font-size: 24px; */
    min-width: 150px;
    margin-bottom: 24px;
    li {
        margin-bottom: 8px;
    }

`



class FeaturedCauseCard extends Component {
    
    render(){

        const {CardHeading, CardText, CardImage, to, children} = this.props;

        return(
            
                <LinkWrapper color to={to}>
                    <CardWrapper>
                        <Icon big
                        src={CardImage || image} />
                        <DivContainer>
                            <h4>{CardHeading}</h4>
                            <HTMLContent content={CardText}/>
                        </DivContainer>
                            {children}
                    </CardWrapper>
                </LinkWrapper>

        )
    }
}

export default FeaturedCauseCard;