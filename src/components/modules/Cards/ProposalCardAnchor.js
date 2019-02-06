import React, {Component} from "react";
import styled from "styled-components";
import {HTMLContent, Icon} from ".."
import {brightGreen} from "../BrandStyle"

const CardWrapper = styled.div`
overflow: hidden;

background-color: ${brightGreen};
    padding: 24px;
    border-radius: 16px;
    width: auto;
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

        const {CardHeading, CardText, CardImage, children} = this.props;

        return(
            
                    <CardWrapper>
                        <Icon big
                        src={CardImage || null} />
                        <DivContainer>
                            <h4>{CardHeading}</h4>
                            <HTMLContent content={CardText}/>
                        </DivContainer>
                            {children}
                    </CardWrapper>

        )
    }
}

export default FeaturedCauseCard;