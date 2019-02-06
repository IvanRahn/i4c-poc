import React  from "react";
import styled from "styled-components";
import {brightGreen, HTMLContent} from "./../"

const CardWrapper = styled.div `
    display: flex;
    flex-direction: column;
    margin: 24px 12px ;
        width: 40%;
    img {
        width: 48px;
        height: 48px;
    }
    @media only screen and (min-width: 500px) {
        align-items: center;
        
    }
    @media only screen and (min-width: 960px) {
            width: auto;
    }   

    p {
        @media only screen and (min-width: 960px) {
            text-align: center;
        }
    }
`
const Stats = styled.p`
color: ${brightGreen};
font-size: 24px;
margin: 24px 0 12px;
`

const ImpactStatsCard = ({image, text, value}) => {
    
        return(
            <CardWrapper>
                <img src={image ? image.secure_url : null} alt=""/>
                <Stats>{value}</Stats>
                <HTMLContent content={text}/>
            </CardWrapper>

        )
}

export default ImpactStatsCard;