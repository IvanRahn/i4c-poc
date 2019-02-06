import React, {Component} from "react";
import styled from "styled-components";
import {HTMLContent, InternalLink} from "../index"

const CardWrapper = styled.div`
overflow: hidden;
margin: 48px auto 0;
width: 100%;
display: flex;
flex-direction: column;
@media only screen and (min-width: 960px) {
    width: 100%;
    max-width: 360px;
    a {
        margin-left: 82px;
    }
}
h2 {
    margin: 24px 0;
    text-align: left;

    ::before {
        content: counter(my-awesome-counter);
        border: 4px solid #FCFCFC;
        border-radius: 100%;
        width: 48px;
        display: block;
        padding: 8px 0;
        margin-bottom: 16px;
        text-align: center;
        @media only screen and (min-width:960px){
            padding: 4px 0;
            margin-right: 24px;
            margin-bottom: 16px;
            clear: both;
            float: left;
        }
    }
}
p {
    margin-bottom: 12px;
}
`

const ImageContainer = styled.img`
height: 180px; 
width: 180px; 
margin-bottom: -80px;
border-radius: 100%;
align-self: ${props => props.position || "flex-end"};

@media only screen and (min-width: 960px) {
    align-self: inherit;
    margin-left: 82px;
    margin-bottom: 0;
}
`
class VolunteerCard extends Component {
    
    render(){

        const {CardHeading, CardText, CardImage} = this.props;

        return(
                <CardWrapper display={this.props.display}>
                    <ImageContainer src= {CardImage} />
                        <h2>{CardHeading}</h2>
                        <HTMLContent 
                        margin="0 0 0 82px" 
                        content={CardText}/>
                        <InternalLink to="/" text="placeholder" color="white"/>
                </CardWrapper>
        )
    }
}

export default VolunteerCard;